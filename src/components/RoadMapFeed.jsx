import React from 'react'
import { NavLink } from 'react-router-dom'


function RoadMapFeed({ feedback }) {
  return (
    <div className={` px-3 py-1 bg-white rounded-md flex flex-col  justify-start gap-6 border-t-4 ${feedback.status === 'planned' ? 'border-custom-color-11': "border-custom-color-10" && feedback.status === 'in-progress' ? " border-f-purple": " border-custom-color-10"}`}>
      <div className='flex flex-col  gap-1 p-1 mb-1 flex-3'> 
        <div className='flex items-center'>
          <span className={
            ` h-3 w-3 rounded-full mr-1
            ${feedback.status === "planned" ? 'bg-custom-color-11' : "bg-custom-color-10" &&
            feedback.status === 'live' ? " bg-custom-color-10": " bg-f-purple"}`}></span>
        <span className='text-xs'>{feedback.status }</span>
        </div>
       
        <NavLink to={`/suggestions/${feedback._id}`} className='text-lg cursor-pointer text-f-dark-blue-300 w-fit'>{feedback.title}</NavLink>
        <p className='text-xs my-2 text-f-dark-blue'> {feedback.description}</p>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit text-f-light-blue'>{feedback.category.title}</span>
      </div>

      <div className='flex justify-between'>
      <div className='flex flex-4 items-start justify-start sm:items-start sm:justify-start'>
        <span className='p-3 text-sm bg-light-white rounded-xl w-fit h-fit cursor-pointer '>{feedback.upvotes}</span>
      </div>
 
      <div className='flex justify-end flex-4  items-center '>
        <span className='p-3 text-sm bg-light-white  rounded-xl w-fit h-fit '>{feedback.commentsLength}</span>
      </div>
 </div>
    </div>
  )
}

export default RoadMapFeed