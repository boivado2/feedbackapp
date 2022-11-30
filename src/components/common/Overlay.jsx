import React from 'react'

function Overlay({ visible, children }) {
  
  if(!visible) return null
  return (
    <div className={` absolute overflow-hidden flex justify-center items-center  h-screen top-0 left-0  w-full z-30  overlay opacity-80`}>
      {children}
    </div>  

      )
}

export default Overlay