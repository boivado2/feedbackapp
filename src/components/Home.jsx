/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import FeedbackContext from './../context/feeds/feedbackContext';
import { useDispatch } from 'react-redux';
import { clearFeedbackError, loadFeedbacks } from '../app/feedback';
import { loadcategories } from './../app/categories';
import { useNavigate } from 'react-router-dom';



function Home() {
  const dispatch = useDispatch()
  const { getCategories } = useContext(FeedbackContext)
  const feedbacks = useSelector(state => state.entities.feedbacks.list)
  const mobileSidebar = useSelector(state => state.ui.mobileSidebar)

  
  useEffect(() => {
    getCategories()
    dispatch(loadFeedbacks())
    dispatch(loadcategories())


  }, [])
 
 return (
   <div className={` font-jost text-sm overflow-x-hidden bg-custom-color-white-200 h-screen   flex flex-col transition-all`}>
     <Navbar/>      
     
     <div className={`relative  lg:container lg:mx-auto sm:p-9 flex  flex-col md:flex-row sm:gap-3 ${mobileSidebar ? "overflow-y-hidden h-screen sm:overflow-y-visible" : "h-full"} `}>
       
       <div className={`${mobileSidebar && "absolute sm:static sm:h-full top-0 left-0 h-screen/2 w-full z-30  overlay"} sm:hidden `}>
       </div>

       <SideBar />
       
       <main className={`sm:flex-3 sm:flex flex-col w-full h-full gap-4 sm:filter-none transition-all ${mobileSidebar && 'h-screen/2 sm:h-full'}`}>
         
         <Header filterSuggestionLength={feedbacks.length} />
          
         <FeedPosts />
          
       </main>
      
     </div>
 
    
   </div>
  );


}

export default Home