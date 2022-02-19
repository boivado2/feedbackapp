import React from 'react'

function Header() {
  return (
    <div className='p-2 border border-green-400 flex justify-between'>
      <div>
        sort by: <span>Most Upvotes <img src="#" alt="downArrow" /></span>
      </div>
      <button className='border-none px-8 py-3 text-xs bg-slate-400 rounded-md'>New Feedback</button>
    </div>
  )
}

export default Header