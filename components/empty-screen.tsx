import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Quelles sont les caractéristiques de la Bretagne que vous aimez le plus mettre en avant dans vos publications de Anne Kerdi ?',
    message: 'Quelles sont les caractéristiques de la Bretagne que vous aimez le plus mettre en avant dans vos publications de Anne Kerdi ?'
  },
  {
    heading: 'Comment interagissez-vous avec vos abonnés et son importance de cette interaction pour vous Anne Kerdi ?',
    message: 'Comment interagissez-vous avec vos abonnés et son importance de cette interaction pour vous Anne Kerdi ?'
  },
  {
    heading: 'How does the Vercel AI SDK work?',
    message: 'How does the Vercel AI SDK work?'
  },
  {
    heading: 'Tesla vs Rivian',
    message: 'Tesla vs Rivian'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
