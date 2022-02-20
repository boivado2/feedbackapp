import React from 'react'

function Header() {
  return (
    <div className='p-2 bg-f-dark-blue-300 text-white sm:rounded-md flex justify-between'>
      <div className="flex items-center justify-center">
        <p className=''>sort by:Most Upvotes <span className="inline-block"> <img src="#" alt="downArrow" /></span></p>
      </div>
      <button className='border-none px-4 py-2 lg:px-8 lg:py-3 text-xs lg:text-sm text-white rounded-md bg-f-purple'>+ Add Feedback</button>
    </div>
  )
}

export default Header