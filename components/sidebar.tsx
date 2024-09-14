import HistoryContainer from './history-container';

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex" 
         style={{ maxWidth: '100%', marginTop: '100px' }}>
      <div className="flex flex-col items-center space-y-4 w-full">
        {/* Image 1 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image001.jpg" 
          alt="Anne 1" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover"
        />
        {/* Image 2 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image002.jpg" 
          alt="Anne 2" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover"
        />
        {/* Image 3 */}
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image003.jpg" 
          alt="Anne 3" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover"
        />
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}
