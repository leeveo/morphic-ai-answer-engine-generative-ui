import HistoryContainer from './history-container';

export async function Sidebar() {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
     
      <HistoryContainer location="sidebar" />
    </div>
  );
}
