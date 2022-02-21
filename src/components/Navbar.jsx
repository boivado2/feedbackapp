import React from 'react'

function Navbar({hideSidebar, showSidebar, mobileSidebar}) {

  const onHideSidebar = (e) => {
    e.preventDefault()
    hideSidebar()
  }

  const onShowSidebar = (e) => {
    e.preventDefault()
    showSidebar()
  }
  return (
    <div className='flex justify-between p-3 bg-radial text-white  h-20 items-center sm:hidden'>
      <div className="">
      <h1 className='text-lg'>Frontend Mentor</h1>
      <h2 className='text-sm'>Feedback Dashboard</h2>
      </div>
      {!mobileSidebar ? <p className=' cursor-pointer' onClick={onShowSidebar}>open</p> : <p className=' cursor-pointer' onClick={onHideSidebar}>X</p>}
    </div>
  )
}

export default Navbar