import { useState } from 'react/cjs/react.development';
import SideBar from './components/SideBar'
import Navbar from './components/Navbar';
import Header from './components/Header';
import FeedPosts from './components/FeedPosts';

import './App.css';


function App() {

  const [mobileSidebar, setMobileSidebar] = useState(false)
  const [selectedCategory, setSeletedCategory] = useState('all')
  const [selectedMenuItem, setMenuItem] = useState({ title: "Most Upvotes", id: 1, path: 'upvotes', order: "desc" })


  const onHandleMenu = (menuItem) =>{
    setMenuItem(menuItem)
  }

  const handleSelectedCategory = (item) => {
    setSeletedCategory(item)
    setMobileSidebar(false)
  }

  const hideSidebar = () => {
    setMobileSidebar(false)
  }
 const showSidebar = () => {
    setMobileSidebar(true)
  }
 
  return (
    <div className={`font-jost text-sm overflow-x-hidden ${mobileSidebar ? 'overflow-y-hidden h-screen sm:overflow-y-scroll sm:h-full' : ''}`}>
      <Navbar hideSidebar={hideSidebar} showSidebar={showSidebar} mobileSidebar={mobileSidebar}/>
      <div className={` lg:container mx-auto sm:p-9  flex  flex-col md:flex-row sm:gap-3  `}>
          <SideBar onSelectedCategory={handleSelectedCategory} selectedCategory={selectedCategory}  mobileSidebar={mobileSidebar} />
        <main className={`md:flex-3 flex flex-col gap-4 sm:filter-none ${mobileSidebar ? 'brightness-50 blur-sm' :''}`}>
          <Header onHandleMenu={onHandleMenu} selectedMenuItem={selectedMenuItem}/>
          <FeedPosts selectedCategory={selectedCategory} selectedMenuItem={selectedMenuItem}/>
          </main>
      </div>
 
    </div>
  );
}

export default App;
