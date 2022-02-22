import React from 'react'


function FeedCategory({onItemSelect, items, selectedItem}) {

  return (
    <div className='flex  gap-2 lg:gap-3 flex-wrap   items-center justify-start  p-4 lg:text-xl'>
      {items.map((item =>  <div key={item.name} onClick={() => onItemSelect()} className={`flex rounded-lg flex-row py-1 px-4 text-sm bg-light-white h-fit w-fit hover:bg-light-white-100 cursor-pointer `}>
        <p className='lg:text-sm'>{item.name}</p>
    </div>))}
  
    </div>
  )
}

export default FeedCategory