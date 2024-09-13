import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Quelle est ta plage bretonne préférée et pourquoi ?',
    message: 'Quelle est ta plage bretonne préférée et pourquoi ?'
  },
  {
    heading: 'Quel plat traditionnel breton recommanderais-tu ?',
    message: 'Quel plat traditionnel breton recommanderais-tu ?'
  },
  {
    heading: 'Quels événements ou festivals bretons recommandes-tu ?',
    message: 'Quels événements ou festivals bretons recommandes-tu ?'
  },
  {
    heading: 'Quel est ton coin secret en Bretagne ?',
    message: 'Quel est ton coin secret en Bretagne ?'
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
          <img src="/images/placeholder-image.png" alt="Placeholder" className="w-16 h-16 object-cover rounded-full mx-auto" />
          <p className="text-base font-semibold">Voici quelques questions pour démarrer :</p>
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