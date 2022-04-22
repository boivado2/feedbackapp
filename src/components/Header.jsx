import React, {useState, useContext} from 'react'
import DropMenu from './DropMenu';
import { Link } from 'react-router-dom';
import FeedbackContext from '../context/feeds/feedbackContext'
import AppContext  from '../context/app/appContext'
import filteredByStatus from './utils/filteredByStatus';
import checkSvg from '../suggestions/icon-suggestions.svg';

function Header() {
  const {setMenuItem, menuItem} = useContext(AppContext)
  const { feedbacks } = useContext(FeedbackContext)

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

  const allSuggestionFeedback = filteredByStatus(feedbacks, 'suggestion')

  return (
    <div className='p-2 z-10 bg-custom-color-blue-400 text-white sm:rounded-md flex justify-between'>
      <div className='flex justify-center items-center '>
        <p className='hidden sm:flex text-base'>
          <img className='pr-3 h-5' src={checkSvg} alt=""/><span className=' pr-1'>{allSuggestionFeedback.length}</span>  Suggestions</p>
      <DropMenu onHideMenu={onHideMenu} OnShowMenu={OnShowMenu} onMenuSelect={onMenuSelect} menu={menu} selectedMenuItem={menuItem} />
   </div>
      <Link to='/suggestions/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-purple'>+ Add Feedback</Link>
    </div>
  )
}

export default Header