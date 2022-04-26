import React, { useContext } from 'react';
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import AppContext  from '../context/app/appContext'


function Home() {

  const {mobileSidebar, setMobileSidebar} = useContext(AppContext)
 
 return (
   <div className={` font-jost text-sm overflow-x-hidden bg-custom-color-white-200 h-screen   flex flex-col transition-all`}>
     <Navbar setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} />      
     
     <div className={`relative  lg:container lg:mx-auto sm:p-9 flex h-auto flex-col md:flex-row sm:gap-3 ${mobileSidebar && "overflow-y-hidden"} `}>
       
       <div className={`${mobileSidebar && "absolute sm:static sm:h-full top-0 left-0 h-screen/2 w-full z-30  overlay"} sm:hidden `}>
       </div>

        <SideBar  mobileSidebar={mobileSidebar} />
       
       <main className={`sm:flex-3 sm:flex flex-col w-full  sm:h-full gap-4 sm:filter-none transition-all ${mobileSidebar && 'h-screen/2 sm:h-full'}`}>
         
         <Header />
          
         <FeedPosts />
          
       </main>
      
     </div>
 
    
   </div>
  );


}

export default Home