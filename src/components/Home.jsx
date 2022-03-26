import { useState, useEffect, useContext } from 'react/cjs/react.development';
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import { Link } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

function Home() {
  const {getUser} = useContext(AuthContext)

    useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token)
  })

  const [mobileSidebar, setMobileSidebar] = useState(false)

 
  const hideSidebar = () => {
    setMobileSidebar(false)
  }
 const showSidebar = () => {
    setMobileSidebar(true)
  }
 
  return (
    <div className={`font-jost text-sm overflow-x-hidden flex flex-col ${mobileSidebar ? 'overflow-y-hidden h-screen sm:overflow-y-scroll sm:h-full' : ''}`}>
      <Navbar hideSidebar={hideSidebar} showSidebar={showSidebar} mobileSidebar={mobileSidebar} />      
      <div className={` lg:container lg:mx-auto sm:p-9  flex  flex-col md:flex-row sm:gap-3  `}>
          <SideBar  mobileSidebar={mobileSidebar} />
        <main className={`md:flex-3 md:flex flex-col gap-4 sm:filter-none ${mobileSidebar ? 'brightness-50 blur-sm' : ''}`}>
          <Header />
          <FeedPosts/>
          </main>
      </div>
 
    </div>
  );


}

export default Home