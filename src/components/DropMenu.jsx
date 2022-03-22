import React from 'react'

function DropMenu({onMenuSelect, selectedMenuItem, menu, onHideMenu, OnShowMenu}) {
  const menuList = [
    { title: "Most Upvotes", id: 1, sortPath: "upvotes", sortOrder: "desc"  },
    { title: "Least Upvotes", id: 2, sortPath: 'upvotes', sortOrder: "asc" },
    { title: "Most Comments", id: 3, sortPath: 'comments.length', sortOrder: "desc" },
    { title: "Least Comments", id: 4, sortPath: 'comments.length', sortOrder: "asc" },

  ]
  return (
    <div className="relative inline-block text-left">
      <div className="inline-flex justify-center w-full  px-2 py-1 text-sm font-medium text-white" id="menu-button">

        {!menu ?
          <p className=' cursor-pointer'>sort by: <span  onClick={() => OnShowMenu()}>{selectedMenuItem.title}</span> </p>
          :
          <p className=' cursor-pointer'>sort by: <span  onClick={() => onHideMenu()}>{selectedMenuItem.title}</span> </p>
        }
        
      </div>
    

      <div className={`origin-top-right absolute left-0  mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${!menu ? 'hidden' : 'block'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1  divide-y divide-solid" role="none">
          {menuList.map(listItem => (
            <p onClick={() => onMenuSelect(listItem)} className="text-gray-700 flex justify-between px-4 py-2 text-sm cursor-pointer" role="menuitem" id="menu-item-0" key={listItem.id}>{listItem.title} <span>{ selectedMenuItem.title === listItem.title ? "good" :""}</span></p>
          ) )}
        </div>
      </div>
    </div>
    
    
  )
}

export default DropMenu