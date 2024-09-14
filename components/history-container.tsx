import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'

type HistoryContainerProps = {
  location: 'sidebar' | 'header' | 'right-sidebar'
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({ location }) => {
  // Normalisation de la location: si c'est "right-sidebar", on le transforme en "sidebar"
  const normalizedLocation = location === 'right-sidebar' ? 'sidebar' : location

  return (
    <div
      className={location === 'header' ? 'block sm:hidden' : 'hidden sm:block'}
    >
      <History location={normalizedLocation}>
        <HistoryList userId="anonymous" />
      </History>
    </div>
  )
}

export default HistoryContainer
