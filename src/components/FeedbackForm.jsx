import React from 'react'
import { Link } from 'react-router-dom';

function FeedbackForm() {
  return (
    <div className='sm:container mx-auto p-6 flex flex-col justify-between'>

      <Link className='pb-10' to="/">go back</Link>
      
      <form className='  bg-white rounded-xl p-4 flex flex-col gap-4'>
        <div className='flex flex-col'>
          <h4 className='text-lg'>Feedback Title</h4>
          <span className='text-sm my-2'>Add a short, descriptive headline</span>
          <input className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' type="text"/>
        </div>

        <div className='flex flex-col'>
          <h4 className='text-lg'>Category</h4>
          <span className='text-sm my-2'>Choose a category for your feedback</span>
          <select className='py-2 rounded-lg px-8 bg-light-white-100 outline-none' >
            <option value="">Ux</option>
            <option value="">Ui</option>
            <option value="">Enhancement</option>
            <option value="">Feature</option>

          </select>
        </div>

        <div className='flex flex-col '>
          <h4 className='text-lg'>Feedback Detail</h4>
          <span className='text-sm my-2'>Include any specific comments on what should be improved, added, etc</span>
          <textarea className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' >me</textarea>
        </div>

        <div className='flex flex-col'>
          <button to='newfeed' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple mb-2'> Add Feedback</button>
          <button to='newfeed' className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-blue-200'>Cancel</button>

        </div>
      </form>
    </div>
  )
}

export default FeedbackForm