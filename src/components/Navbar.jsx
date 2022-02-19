import React from 'react'

function Navbar({hideSidebar}) {

  const onHideSidebar = (e) => {
    e.preventDefault()
    hideSidebar()
  }
  return (
    <div className='flex justify-between p-3 bg-slate-400 h-20 items-center sm:hidden'>
      <h3 className=''>Frontend Mentor</h3>
      <p className=' cursor-pointer' onClick={onHideSidebar}>X</p>
    </div>
  )
}

export default Navbar