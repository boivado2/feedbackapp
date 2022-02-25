import React from 'react'

function FeedPost({feedback}) {
  return (
    <div className='  px-3 py-1 bg-white rounded-md sm:flex flex-row  justify-start gap-6'>
      <div className='flex flex-col  gap-1 p-1 mb-1 order-2 flex-3'> 
        <p className='text-lg'>{feedback.title}</p>
        <p className='text-xs my-2'> {feedback.description}</p>
        <span className='p-2 text-sm bg-light-white  rounded-sm w-fit h-fit'>{feedback.category}</span>
      </div>

      <div className='order-1 flex flex-4 items-start justify-start sm:items-start sm:justify-start'>
        <span className='p-3 text-sm bg-light-white rounded-xl w-fit h-fit mt-5 '>{feedback.upvotes}</span>
      </div>
 
      <div className='order-3 flex justify-end flex-4  items-center '>
        <span className='p-3 text-sm bg-light-white  rounded-xl w-fit h-fit '>{feedback.comments ? feedback.comments.length : 0}</span>
      </div>
    </div>
  )
}

export default FeedPost