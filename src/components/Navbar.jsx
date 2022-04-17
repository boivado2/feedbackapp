import React from 'react'
import hamburgerCloseSvg from '../shared/mobile/icon-close.svg'
import hamburgerOpenSvg from '../shared/mobile/icon-hamburger.svg'

function Navbar({mobileSidebar, setMobileSidebar}) {

  return (
    <div className='flex justify-between p-3 bg-radial text-white  h-20 items-center sm:hidden'>
      <div className="">
      <h1 className='text-lg'>Frontend Mentor</h1>
      <h2 className='text-sm'>Feedback Dashboard</h2>
      </div>
      {!mobileSidebar ? <p className=' cursor-pointer' onClick={() => setMobileSidebar(true)}><img src={hamburgerOpenSvg} alt="" /></p> : <p className=' cursor-pointer' onClick={() => setMobileSidebar(false)}><img src={hamburgerCloseSvg} alt="" /></p>}
    </div>
  )
}

export default Navbar