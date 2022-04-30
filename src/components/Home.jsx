/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo } from 'react';
import _ from 'lodash'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import FeedPosts from '../components/FeedPosts';
import AppContext from '../context/app/appContext'
import FeedbackContext from './../context/feeds/feedbackContext';
import getFeedbackByStatus from './utils/getFeedbackByStatus'



function Home() {
  const { mobileSidebar, setMobileSidebar, menuItem, selectedCategory } = useContext(AppContext)
  const { getFeedbacks, getCategories, feedbacks, loading } = useContext(FeedbackContext)
  

  const getSuggestionFeedback = useMemo(() => getFeedbackByStatus(feedbacks, 'suggestion'),[feedbacks])

  const filtered = useMemo(() => selectedCategory && selectedCategory._id ? getSuggestionFeedback.filter(feedback => feedback.category.title === selectedCategory.title) : getSuggestionFeedback,[selectedCategory, getSuggestionFeedback])


  const sorted = useMemo(() => _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder]),[filtered, menuItem])
  
  useEffect(() => {
    getFeedbacks()
    getCategories()

  }, [feedbacks.length])
 
 return (
   <div className={` font-jost text-sm overflow-x-hidden bg-custom-color-white-200 h-screen   flex flex-col transition-all`}>
     <Navbar setMobileSidebar={setMobileSidebar} mobileSidebar={mobileSidebar} />      
     
     <div className={`relative  lg:container lg:mx-auto sm:p-9 flex  flex-col md:flex-row sm:gap-3 ${mobileSidebar ? "overflow-y-hidden h-screen sm:overflow-y-visible" : "h-full"} `}>
       
       <div className={`${mobileSidebar && "absolute sm:static sm:h-full top-0 left-0 h-screen/2 w-full z-30  overlay"} sm:hidden `}>
       </div>

       <SideBar  mobileSidebar={mobileSidebar} />
       
       <main className={`sm:flex-3 sm:flex flex-col w-full h-full gap-4 sm:filter-none transition-all ${mobileSidebar && 'h-screen/2 sm:h-full'}`}>
         
         <Header filterSuggestionLength={filtered.length} />
          
         <FeedPosts sortedSuggestion = {sorted} loading={loading} getSuggestionFeedback={getSuggestionFeedback} />
          
       </main>
      
     </div>
 
    
   </div>
  );


}

export default Home