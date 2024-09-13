import HistoryContainer from './history-container'

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex-col justify-center pb-24 hidden sm:flex" style={{ width: '350px' }}>
      <div className="flex flex-col items-center space-y-4">
        <img src="/images/envcartpub001.jpg" alt="Anne 1" className="w-350 h-210 object-cover" />
        <img src="/images/envcartpub001.jpg" alt="Anne 2" className="w-350 h-210 object-cover" />
        <img src="/images/envcartpub001.jpg" alt="Anne 3" className="w-350 h-210 object-cover" />
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  )
}