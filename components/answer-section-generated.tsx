'use client'

import { Section } from './section'
import { BotMessage } from './message'

export type AnswerSectionProps = {
  result: string
}

export function AnswerSectionGenerated({ result }: AnswerSectionProps) {
  return (
    <div style={{ marginTop: '300px' }}>
      <Section title="Answer">
        <BotMessage content={result} />
      </Section>
    </div>
  )
}