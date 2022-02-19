import React from 'react'

function FeedPost() {
  return (
    <div className='  p-4 bg-white rounded-md sm:flex flex-row  justify-start gap-6'>
      <div className='flex flex-col text-sm md:text-xl gap-1 p-1 mb-3 order-2 flex-3'> 
        <h3 className='text-lg'>Add a new Mode</h3>
        <p>The is the most efficient way to keep your screeen</p>
        <span className='p-2 text-sm bg-light-white  rounded-sm w-fit h-fit'>Enhancement</span>
      </div>

      <div className='order-1 flex flex-4 items-start justify-start sm:items-start sm:justify-start'>
        <span className='p-3 text-sm bg-light-white  rounded-sm w-fit h-fit  '>112</span>
      </div>
 
      <div className='order-3 flex justify-end flex-4  items-center'>
        <span className='p-3 text-sm bg-light-white  rounded-sm w-fit h-fit '>2</span>
      </div>
    </div>
  )
}

export default FeedPost