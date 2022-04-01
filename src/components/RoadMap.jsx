/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FeedbackContext from './../context/feeds/feedbackContext';
import RoadMapFeed from './RoadMapFeed';

function RoadMap() {
  const { feedbacks, getFeedbacks } = useContext(FeedbackContext)
  
  useEffect(() => {
    getFeedbacks()
  }, [])

  const [selectedStatus, setCurrentStatus] = useState( { id: 1, title: "planned" })

  const status =[
    { id: 1, title: "planned", description:"Ideas prioritized for research" },
    { id: 2, title: "in-progress", description: 'Currently being developed' },
    {id: 3, title: 'live', description: 'Released features'}
  ]

  const handleStatus = (status) => {
    setCurrentStatus(status)
  }

  const filteredByStatus = (status) => {
    return feedbacks.filter(feedback => feedback.status === status)
  }

  return (
    <div className='md:container md:mx-auto  sm:px-8'>
      
      <div className='p-4 sm:mt-4 bg-f-dark-blue-300 text-white sm:rounded-md flex justify-between items-center'>
      <div className='flex flex-col justify-center items-center '>
      <Link className='pb-1' to="/">Go Back</Link>
      <h3>Roadmap</h3>
   </div>
      <Link to='/feedback/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple'>+ Add Feedback</Link>
    </div>

      <div className='flex justify-around w-full items-center border-b-2 sm:hidden'>
        {status.map(status => (
          <p onClick={() => handleStatus(status)} className={`px-2 py-4  ${status.title === selectedStatus.title ? " border-b-2 border-custom-color-11":""}`} key={status.id}>{status.title} <span>({filteredByStatus(status.title).length })</span> </p>
        ))}
      </div>

      {/* feedbacks */}
      <div className='sm:grid sm:grid-cols-3 sm:gap-4 mt-4 px-9 sm:px-0'>
        {status.map(status => (
          <div key={status.id} className={` ${selectedStatus.title === status.title ? '': 'hidden sm:block'}`}>
            <div className='mb-4'>
            <p className=' text-base'>{status.title} <span>(
              {filteredByStatus(status.title).length})</span> </p>
            <p className='text-xs text-ellipsis'>{ status.description}</p>
            </div>
              <div className='flex flex-col gap-2'>
              {filteredByStatus(status.title).map(feedback => (
                <RoadMapFeed key={feedback._id} feedback=
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