import React from 'react'

function BoxWidget({title,icon, iconName, flex_dir}) {
  return (
    <div className={`flex rounded-lg flex-${flex_dir} p-2 text-sm bg-light-white h-fit w-fit`}>
            <img className='h-4 w-full ' src={icon} alt={iconName} />
      <p>{title}</p>
    </div>
  )
}

export default BoxWidget