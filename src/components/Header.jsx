import React from 'react'
import { useSelector, useDispatch} from 'react-redux';

import DropMenu from './DropMenu';
import { Link } from 'react-router-dom';
import checkSvg from '../suggestions/icon-suggestions.svg';
import { selectMenuItem, toggleMenu } from '../app/ui';

function Header({ filterSuggestionLength }) {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.entities.ui.menu)
  const selectedMenuItem = useSelector(state => state.entities.ui.menuItem)

  return (
    <div className='p-2 z-20 bg-custom-color-blue-400 text-white sm:rounded-md flex justify-between'>
      <div className='flex justify-center items-center '>
        <p className='hidden sm:flex text-base'>
          <img className='pr-3 h-5' src={checkSvg} alt=""/><span className=' pr-1'>{filterSuggestionLength}</span>  Suggestions</p>
      <DropMenu onClick={()=> dispatch(toggleMenu())} selectMenuItem={(item) => dispatch(selectMenuItem(item))} menu={menu} selectedMenuItem={selectedMenuItem} />
   </div>
      <Link to='/suggestions/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-purple'>+ Add Feedback</Link>
    </div>
  )
}

export default Header