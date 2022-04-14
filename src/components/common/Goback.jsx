import React from 'react'
import { useNavigate } from 'react-router-dom';
import Btn from './Btn'
import arrowLeftSvg from '../../shared/icon-arrow-left.svg'


function Goback({color}) {
  const navigate = useNavigate()
  return (
    <div className='text-xl'>
      <img className='inline-block' src={arrowLeftSvg} alt=""/>
      <Btn title="Go back" onClick={() => navigate(-1)} styles={` px-2 ${color}`}/>
    </div>
  )
}

export default Goback