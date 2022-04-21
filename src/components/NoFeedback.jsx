import React from 'react'
import { Link } from 'react-router-dom';
import empty from '../suggestions/illustration-empty.svg';

function NoFeedback() {
  return (
    <div className='h-full flex flex-col justify-center items-center p-20 bg-custom-color-white-100 rounded-md '>
      <img src={empty} alt="" />
      <h4 className=' text-xl sm:text-2xl my-8 text-center text-custom-color-blue-300'>There is no feedback yet.</h4>
      <p className=' text-custom-color-blue-200 text-base text-center'>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <Link to='/feedback/new' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-purple hover:brightness-150 mt-6'>+ Add Feedback</Link>
    </div>
  )
}

export default NoFeedback