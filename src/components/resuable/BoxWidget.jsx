import React from 'react'

function BoxWidget({title,icon, iconName, flex_dir, onClick}) {
  return (
    <div onClick={onClick} className={`flex rounded-lg flex-${flex_dir} py-1 px-4 text-sm bg-light-white h-fit w-fit hover:bg-light-white-100 cursor-pointer`}>
            <img className='h-4 w-full ' src={icon} alt={iconName} />
      <p className='lg:text-sm'>{title}</p>
    </div>
  )
}

export default BoxWidget