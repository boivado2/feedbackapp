/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import FeedCategory from './FeedCategory'
import FeedbackContext from './../context/feeds/feedbackContext';
import AuthContext from './../context/auth/authContext';
import AppContext  from '../context/app/appContext'



function SideBar({ mobileSidebar, me }) {
  const {setCategory, selectedCategory} =  useContext(AppContext)
  const { isAuthenticated, logOutUser } = useContext(AuthContext)
 const {getCategories, categories, feedbacks} =  useContext(FeedbackContext)

  useEffect(() => {
    getCategories()
  }, [])
  
  const handleCategorySelect = (category) => {
    setCategory(category)
  }

  const handleLogout = () => {
    logOutUser()
    window.location = '/'
  }

  const filteredByStatus = (status) => {
    return feedbacks.filter(feedback => feedback.status === status)
  }

  
  
  return (
    <div className={`h-full sm:h-fit absolute flex sm:transform-none sm:static right-0 sm:left-0  flex-col sm:flex-row md:flex-col gap-4 sm:gap-2 p-9  rounded-sm sm:p-0  sm:w-full  md:flex-2  ${!mobileSidebar ? 'translate-x-72 ' : ' h-full transform-none bg-custom-color-white-100'} transition-all ease-linear delay-75 z-40 sm:bg-inherit`}> 
      
      <div className="hidden bg-radial text-white  rounded-lg sm:flex flex-col  sm:w-full bg-white  items-start justify-end pt-6 pb-4 px-4 text-clip ">
        <h1 className='text-base lg:text-2xl'>Frontend Mentor</h1>
        <h2 className='text-sm lg:text-base'>Feedback Board</h2>
 </div>
      <div className="w-48 flex items-start justify-center bg-white sm:w-full rounded-lg ">
        <FeedCategory onItemSelect={handleCategorySelect} selectedItem={selectedCategory} items={ [{title: "All", _id: ""}, ...categories]}/>
      </div>
      <div className="flex justify-center flex-col  w-48
        bg-white rounded-lg sm:w-full p-5">
        <div className=" flex justify-between  mb-2">
          <h4 className='mr-4'>Roadmap</h4>
          <NavLink to="/roadmap" className="underline text-custom-color-blue-100"> Views</NavLink>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p><span className=' bg-custom-color-red-100 rounded-full w-2 h-2 inline-block'></span> Planned</p>
            <p className='my-2'> <span className=' rounded-full w-2 h-2 inline-block bg-custom-color-purple'></span> in-Progress</p>
            <p > <span className='bg-custom-color-cyan rounded-full w-2 h-2 inline-block'></span> Live</p>
          </div>
          <div>
            <p  className='text-custom-color-blue-200'>{ filteredByStatus("planned").length}</p>
            <p className='my-2 text-custom-color-blue-200'>{ filteredByStatus("in-progress").length}</p>
            <p className='text-custom-color-blue-200'>{ filteredByStatus("live").length}</p>
          </div>
          
        </div>

        {!isAuthenticated ?
          (<div className='mt-2'>
            <Link to="/login">Login</Link>
            <Link className='px-2' to="/register">Register</Link>
          </div>)
            :
            (<button className='cursor-pointer mt-3 text-left' onClick={handleLogout}>Logout</button>)}
      </div>
    </div>
  )
}

export default SideBar








