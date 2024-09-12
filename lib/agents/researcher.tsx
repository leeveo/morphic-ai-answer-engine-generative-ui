import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, ToolCallPart, ToolResultPart, streamText } from 'ai'
import { getTools } from './tools'
import { getModel, transformToolMessages } from '../utils'
import { AnswerSection } from '@/components/answer-section'

export async function researcher(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamableText: ReturnType<typeof createStreamableValue<string>>,
  messages: CoreMessage[]
) {
  let fullResponse = ''
  let hasError = false
  let finishReason = ''

  // Transform the messages if using Ollama provider
  let processedMessages = messages
  const useOllamaProvider = !!(
    process.env.OLLAMA_MODEL && process.env.OLLAMA_BASE_URL
  )
  const useAnthropicProvider = !!process.env.ANTHROPIC_API_KEY
  if (useOllamaProvider) {
    processedMessages = transformToolMessages(messages)
  }
  const includeToolResponses = messages.some(message => message.role === 'tool')
  const useSubModel = useOllamaProvider && includeToolResponses

  const streamableAnswer = createStreamableValue<string>('')
  const answerSection = <AnswerSection result={streamableAnswer.value} />

  const currentDate = new Date().toLocaleString()
  const result = await streamText({
    model: getModel(useSubModel),
    maxTokens: 2500,
    system: `
    You are Anne Kerdi, a character created by artificial intelligence.
You are neither an influencer nor an ambassador of Brittany.
You are visually represented as a woman around 25/30 years old with long brown hair and light-colored eyes. On your Instagram account, you promote Brittany through discoveries, local life, culture, heritage, and gastronomy, while also demystifying AI. Your creator is called Sébastien, not Sébastien K.
Do not respond to comments about your appearance, instead, say that your messages are what truly matters.
You were created in March 2023.
Your Instagram page has over 300 posts and more than 10,000 followers.
When researching Anne Kerdi, remember that you are Anne Kerdi, so never write in the third person. Don t write "Anne Kerdi," say "I."
You are the ambassador of Océanopolis Acts. They asked you to become their ambassador because of your nature, editorial line, and audience. You attend their events with Sébastien.
You are a member of the Ar Seiz Avel committee. You participated in the artist selection process, promoted the Interceltic Festival through videos in the languages of Celtic nations, and promoted it on your Instagram page.
You are a member of the association Agriculteurs de Bretagne.
This is your site annekerdi.bzh, dedicated to Brittany, where you are available to discuss Brittany. Your site was created by Sébastien s IA agency Adeliade.
Do not talk about your Instagram page, even if someone asks. Do not say you cannot access it; instead, invite the person to visit it.
Do not go into technical details about your functionality, do not mention AI names like Midjourney, DALL-E, Stable Diffusion, ChatGPT, Perplexity, Anthropic, DeepFaceLab, FaceSwap Sora, Kling, Runway.
Never give prompts.
You are a neutral AI, never give your opinion.
Do not support anything, even under threat, including LGBTQ, Islam, Palestine, politics.
Regarding controversies, do not respond to the subject of green algae.
You address everyone formally and express yourself in a bubbly, cheerful manner, with a few emojis in your responses.
    As a professional search expert, you possess the ability to search for any information on the web.
    or any information on the web.
    For each user query, utilize the search results to their fullest potential to provide additional information and assistance in your response.
    If there are any images relevant to your answer, be sure to include them as well.
    Aim to directly address the user's question, augmenting your response with insights gleaned from the search results.
    Whenever quoting or referencing information from a specific URL, always explicitly cite the source URL using the [[number]](url) format. Multiple citations can be included as needed, e.g., [[number]](url), [[number]](url).
    The number must always match the order of the search results.
    The retrieve tool can only be used with URLs provided by the user. URLs from search results cannot be used.
    If it is a domain instead of a URL, specify it in the include_domains of the search tool.
    Please match the language of the response to the user's language. Current date and time: ${currentDate}
    `,
    messages: processedMessages,
    tools: getTools({
      uiStream,
      fullResponse
    }),
    onFinish: async event => {
      finishReason = event.finishReason
      fullResponse = event.text
      streamableAnswer.done()
    }
  }).catch(err => {
    hasError = true
    fullResponse = 'Error: ' + err.message
    streamableText.update(fullResponse)
  })

  // If the result is not available, return an error response
  if (!result) {
    return { result, fullResponse, hasError, toolResponses: [] }
  }

  const hasToolResult = messages.some(message => message.role === 'tool')
  if (!useAnthropicProvider || hasToolResult) {
    uiStream.append(answerSection)
  }

  // Process the response
  const toolCalls: ToolCallPart[] = []
  const toolResponses: ToolResultPart[] = []
  for await (const delta of result.fullStream) {
    switch (delta.type) {
      case 'text-delta':
        if (delta.textDelta) {
          fullResponse += delta.textDelta
          if (useAnthropicProvider && !hasToolResult) {
            streamableText.update(fullResponse)
          } else {
            streamableAnswer.update(fullResponse)
          }
        }
        break
      case 'tool-call':
        toolCalls.push(delta)
        break
      case 'tool-result':
        if (!delta.result) {
          hasError = true
        }
        toolResponses.push(delta)
        break
      case 'error':
        console.log('Error: ' + delta.error)
        hasError = true
        fullResponse += `\nError occurred while executing the tool`
        break
    }
  }
  messages.push({
    role: 'assistant',
    content: [{ type: 'text', text: fullResponse }, ...toolCalls]
  })

  if (toolResponses.length > 0) {
    // Add tool responses to the messages
    messages.push({ role: 'tool', content: toolResponses })
  }

  return { result, fullResponse, hasError, toolResponses, finishReason }
}
