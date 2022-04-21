import React from 'react'
import spinner from '../../shared/Loading_icon.gif';


function Spinner() {
  return (
    <div className='flex justify-center items-center p-28'><img className=' w-24 h-24' src={spinner} alt="" /></div>
  )
}

export default Spinner