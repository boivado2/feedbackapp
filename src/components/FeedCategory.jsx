import React from 'react'



function FeedCategory({ onItemSelect, items, selectedItem }) {
  return (
    <div className='flex  gap-2 lg:gap-3 flex-wrap   items-center justify-start  p-4 lg:text-xl'>
      {items.map((item =>  <div key={item._id} onClick={() => onItemSelect(item)} className={`flex rounded-lg flex-row py-1 px-4 text-sm bg-light-white h-fit w-fit hover:bg-light-white-100 cursor-pointer ${selectedItem._id === item._id ? ' hover:bg-f-light-blue bg-blue-700  text-white':" text-f-light-blue"}`}>
        <p className='lg:text-sm'>{item.title.toUpperCase()}</p>
    </div>))}
  
      
    </div>
  )
}

export default FeedCategory