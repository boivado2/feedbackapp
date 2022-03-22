import React from 'react'

function FeedPost({ feedback }) {
  const onHandleIncrement = (upvotes) => {
    console.log(feedback.upvotes+=1) 

  }
  return (
    <div className='  px-3 py-1 bg-white rounded-md sm:flex flex-row  justify-start gap-6'>
      <div className='flex flex-col  gap-1 p-1 mb-1 order-2 flex-3'> 
        <p className='text-lg cursor-pointer text-f-dark-blue-300'>{feedback.title}</p>
        <p className='text-xs my-2 text-f-dark-blue'> {feedback.description}</p>
        <span className='p-2 text-sm bg-light-white  rounded-lg w-fit h-fit text-f-light-blue'>{feedback.category.title}</span>
      </div>

      <div className='order-1 flex flex-4 items-start justify-start sm:items-start sm:justify-start'>
        <span onClick={() => onHandleIncrement(feedback.upvotes)} className='p-3 text-sm bg-light-white rounded-xl w-fit h-fit mt-5 cursor-pointer '>{feedback.upvotes}</span>
      </div>
 
      <div className='order-3 flex justify-end flex-4  items-center '>
        <span className='p-3 text-sm bg-light-white  rounded-xl w-fit h-fit '>{feedback.comments.length}</span>
      </div>
    </div>
  )
}

export default FeedPost