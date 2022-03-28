import React, {useState, useContext} from 'react'
import DropMenu from './DropMenu';
import { Link } from 'react-router-dom';
import FeedbackContext  from '../context/feeds/feedbackContext'

function Header() {

  const{setMenuItem, menuItem} = useContext(FeedbackContext)
  const [menu, setMenu] = useState(false)

  const onMenuSelect = (menuItem) => {
    setMenuItem(menuItem)
    setMenu(false)

  }
  

  const OnShowMenu = () => {
    setMenu(true)
  }
  
  const onHideMenu = () => {
    setMenu(false)
  }
  return (
    <div className='p-2 bg-f-dark-blue-300 text-white sm:rounded-md flex justify-between'>
      <div className='flex justify-center items-center '>
      <p className='hidden sm:flex'>Suggestion</p>
      <DropMenu onHideMenu={onHideMenu} OnShowMenu={OnShowMenu} onMenuSelect={onMenuSelect} menu={menu} selectedMenuItem={menuItem} />
   </div>
      <Link to='/feedback/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple'>+ Add Feedback</Link>
    </div>
  )
}

export default Header