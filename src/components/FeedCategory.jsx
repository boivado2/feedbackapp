import React from 'react'



function FeedCategory({ onItemSelect, items, selectedItem }) {
  return (
    <div className='flex  gap-2 lg:gap-3 flex-wrap   items-center justify-start  p-4 lg:text-xl'>
      {items.map((item =>  <div key={item._id} onClick={() => onItemSelect(item)} className={`flex rounded-lg flex-row py-1 px-2 text-sm  w-fit  cursor-pointer  ${selectedItem._id === item._id ? ' hover:bg-custom-color-blue-100 bg-custom-color-blue-100 text-white':" text-custom-color-blue-100 bg-custom-color-white-200 hover:bg-custom-color-white-100 hover:brightness-90"}`}>
        <p className='sm:text-base'>{item.title.toUpperCase()}</p>
    </div>))}
  
      
    </div>
  )
}

export default FeedCategory