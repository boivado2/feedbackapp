import React from 'react'

function Btn({onClick, title,styles}) {
  return (
    <button onClick={onClick} className={`border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md ${styles}`}>{ title}</button>
  )
}

export default Btn