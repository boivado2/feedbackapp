import React from 'react'
import checkSvg from '../shared/icon-check.svg'
import arrowDownSvg from '../shared/icon-arrow-down.svg'
import arrowUpSvg from '../shared/icon-arrow-up.svg'

const menuList = [
  { title: "Most Upvotes", id: 1, sortPath: "upvotes.length", sortOrder: "desc"  },
  { title: "Least Upvotes", id: 2, sortPath: 'upvotes.length', sortOrder: "asc" },
  { title: "Most Comments", id: 3, sortPath: 'commentsLength', sortOrder: "desc" },
  { title: "Least Comments", id: 4, sortPath: 'commentsLength', sortOrder: "asc" },

]

function DropMenu({selectMenuItem, selectedMenuItem, menu, onClick }) {

  return (
    <div className="relative inline-block text-left z-10">
      <div className="inline-flex justify-center w-full  px-2 py-1 text-sm font-medium text-white" id="menu-button">
          <div className=' cursor-pointer'>sort by: <span onClick={onClick} >{selectedMenuItem.title} {!menu ? (
            <img className='inline-block' src={arrowDownSvg} alt="" />
            
          ): (
            <img className='inline-block' src={arrowUpSvg} alt="" />
            )} </span>
          </div>
      </div>
    
      <div className={`origin-top-right absolute left-0  mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${!menu ? 'hidden' : 'block'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1  divide-y divide-solid" role="none">
          {menuList.map(item => (
            <p onClick={() => selectMenuItem(item)} className="text-gray-700 flex justify-between px-4 py-2 text-sm cursor-pointer" role="menuitem" id="menu-item-0" key={item.id}>{item.title} <span>{ selectedMenuItem.title === item.title ? <img src={checkSvg} alt="" /> :null}</span></p>
          ) )}
        </div>
      </div>
    </div>
    
    
  )
}

export default DropMenu