import React from 'react'
import spinner from '../../shared/Ellipsis-3s-171px.gif';


function Spinner() {
  return (
    <div className='flex justify-center items-center '><img className='w-24 h-24' src={spinner} alt="" /></div>
  )
}

export default Spinner