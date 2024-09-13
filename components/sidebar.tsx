import HistoryContainer from './history-container'

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex-col justify-center pb-24 hidden sm:flex" style={{ width: '450px', marginTop: '150px' }}>
      <div className="flex flex-col items-center space-y-4">
        <img src="https://www.leeveo.tv/wp-content/uploads/2024/09/image001.jpg" alt="Anne 1" className="w-450 h-270 object-cover" />
        <img src="https://www.leeveo.tv/wp-content/uploads/2024/09/image002.jpg" alt="Anne 2" className="w-450 h-270 object-cover" />
        <img src="https://www.leeveo.tv/wp-content/uploads/2024/09/image003.jpg" alt="Anne 3" className="w-450 h-270 object-cover" />
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  )
}