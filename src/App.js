import SideBar from './components/SideBar'
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeedPosts from './components/FeedPosts';

import './App.css';
import { useState } from 'react/cjs/react.development';


function App() {

  const [mobileSidebar, setMobileSidebar] = useState(false)

  const hideSidebar = () => {
    setMobileSidebar(false)
  }
 const showSidebar = () => {
    setMobileSidebar(true)
  }
 
  return (
    <div className="font-jost text-sm overflow-x-hidden">
      <Navbar hideSidebar={hideSidebar} showSidebar={showSidebar} mobileSidebar={mobileSidebar}/>
      <div className={` lg:container mx-auto sm:p-9  flex  flex-col md:flex-row sm:gap-3  `}>
          <SideBar  mobileSidebar={mobileSidebar} />
        <main className={`md:flex-3 flex flex-col gap-4 sm:filter-none ${mobileSidebar ? 'brightness-50 blur-sm' :''}`}>
          <Header/>
          <FeedPosts/>
          </main>
      </div>
 
    </div>
  );
}

export default App;
