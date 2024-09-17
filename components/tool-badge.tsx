import React from 'react'
import { Search } from 'lucide-react'
import { Badge } from './ui/badge'

type ToolBadgeProps = {
  tool: string
  children: React.ReactNode
  className?: string
}

export const ToolBadge: React.FC<ToolBadgeProps> = ({
  tool,
  children,
  className
}) => {
  const icon: Record<string, React.ReactNode> = {
    search: <Search size={14} />
  }

  return (
    <Badge className={className} variant={'secondary'}>
      <div className="flex justify-between items-center w-full">
        {/* Colonne pour l'icône */}
        <div className="w-1/2 flex items-center">
          {icon[tool]}
        </div>
        {/* Colonne pour le texte */}
        <div className="w-1/2">
          <span className="ml-1">{children}</span>
        </div>
      </div>
    </Badge>
  )
}
