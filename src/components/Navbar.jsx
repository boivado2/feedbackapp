import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { toggleSidebar } from '../app/ui';
import hamburgerCloseSvg from '../shared/mobile/icon-close.svg'
import hamburgerOpenSvg from '../shared/mobile/icon-hamburger.svg'

function Navbar() {
  const dispatch = useDispatch()
  const mobileSidebar = useSelector(state => state.ui.mobileSidebar)

  return (
    <div className='flex justify-between p-3 bg-radial text-white  h-20 items-center sm:hidden z-40  sticky top-0'>
      <div className="">
      <h1 className='text-lg'>Frontend Mentor</h1>
      <h2 className='text-sm'>Feedback Dashboard</h2>
      </div>
      {!mobileSidebar ? <p className=' cursor-pointer' onClick={() => dispatch(toggleSidebar())}><img src={hamburgerOpenSvg} alt="" /></p> : <p className=' cursor-pointer' onClick={() => dispatch(toggleSidebar())}><img src={hamburgerCloseSvg} alt="" /></p>}
    </div>
  )
}

export default Navbar