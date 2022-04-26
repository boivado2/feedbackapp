/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FeedbackContext from './../context/feeds/feedbackContext';
import FeedPost from './FeedPost';
import getFeedbackByStatus from './utils/getFeedbackByStatus';
import Goback from './common/Goback';

function RoadMap() {
  const { feedbacks, getFeedbacks } = useContext(FeedbackContext)
  
  useEffect(() => {
    getFeedbacks()
  }, [])

  const [selectedStatus, setCurrentStatus] = useState("planned")

  const status =[
    { id: 1, title: "planned", description:"Ideas prioritized for research" },
    { id: 2, title: "in-progress", description: 'Currently being developed' },
    {id: 3, title: 'live', description: 'Released features'}
  ]





  return (
  
      
      <div className='md:container h-full   md:mx-auto sm:p-2 md:py-8'>
      <div className='p-4  w-full bg-custom-color-blue-400 text-white sm:rounded-md flex justify-between items-center'>
      <div className='flex flex-col justify-center items-center '>
      <Goback color="text-white"/>
          <h3>Roadmap</h3>
   </div>
      <Link to='/suggestions/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-purple'>+ Add Feedback</Link>
    </div>

      <div className='flex justify-between  px-3 sm:px-10 w-full items-start border-b-2 md:hidden'>
        <p onClick={() => setCurrentStatus('planned')} className={` py-4 cursor-pointer  ${selectedStatus === "planned" && " border-custom-color-red-100 border-b-2"}`}>planned <span>({getFeedbackByStatus(feedbacks, "planned").length})</span> </p>
        <p onClick={() => setCurrentStatus("in-progress")} className={` py-4 cursor-pointer  ${selectedStatus === "in-progress" && "border-custom-color-purple border-b-2"}`}>in-progress <span>({getFeedbackByStatus(feedbacks, "in-progress").length})</span> </p>
        <p  onClick={() => setCurrentStatus("live")} className={` py-4 cursor-pointer  ${selectedStatus === "live" && 'border-b-2 border-custom-color-cyan'}`}>live<span>({getFeedbackByStatus(feedbacks, "live").length })</span> </p>
      </div>

      {/* feedbacks */}
      <div className='md:grid md:grid-cols-3 md:gap-4 mt-4 px-2 sm:px-9 md:px-0 '>
        {status.map(status => (
          <div key={status.id} className={`${selectedStatus === status.title ? '': 'hidden md:block'}`}>
            <div className='mb-4 px-2 sm:px-9 md:px-0'>
            <p className=' text-base'>{status.title} <span>(
              {getFeedbackByStatus(feedbacks,status.title).length})</span> </p>
            <p className='text-xs text-ellipsis'>{ status.description}</p>
            </div>
              <div className='grid grid-cols-1 gap-2 px-2 sm:px-9 md:px-0 '>
              {getFeedbackByStatus(feedbacks,status.title).map(feedback => (
                <FeedPost key={feedback._id} feedback=
                  {feedback} />
              ))}
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadMap