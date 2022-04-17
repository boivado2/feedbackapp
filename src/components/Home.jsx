import { useContext } from 'react/cjs/react.development';
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import AppContext  from '../context/app/appContext'


function Home() {

  const {mobileSidebar, setMobileSidebar} = useContext(AppContext)
 
 return (
    <div className={`font-jost text-sm overflow-x-hidden flex flex-col transition-all ${mobileSidebar ? 'overflow-y-hidden h-screen sm:overflow-y-scroll sm:h-full' : ''}`}>
      <Navbar setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} />      
      <div className={` lg:container lg:mx-auto sm:p-9  flex  flex-col md:flex-row sm:gap-3  `}>
          <SideBar  mobileSidebar={mobileSidebar} />
        <main className={`sm:flex-3 sm:flex flex-col gap-4 sm:filter-none transition-all ${mobileSidebar ? 'brightness-50 blur-sm' : ''}`}>
          <Header />
          <FeedPosts/>
          </main>
      </div>
 
    </div>
  );


}

export default Home