import HistoryContainer from './history-container';

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container" 
         style={{ maxWidth: '100%', marginTop: '100px', width: '100%', maxWidth: '450px' }}>
      <div className="flex flex-col items-center space-y-4 w-full">
        {/* Image 1 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image001.jpg" 
          alt="Anne 1" 
          className="sidebar-img"
        />
        {/* Image 2 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image002.jpg" 
          alt="Anne 2" 
          className="sidebar-img"
        />
        {/* Image 3 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image003.jpg" 
          alt="Anne 3" 
          className="sidebar-img"
        />
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}
