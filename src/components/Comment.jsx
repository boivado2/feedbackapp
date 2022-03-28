/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react'



function Comment({ comment }) {

  const [form, setForm] = useState(false)

  const handleFormSubmit = (e) => {

    
  }

  const handleInputChange = (e) => {
  }

  const handleShowForm = () => {
    setForm(true)
  }

  const handleHideForm = () => {
    setForm(false)
  }
  return (
    <div className=''>
      <div className='w-full flex flex-col p-3 sm:p-7'>
      <img className=' w-14 h-14 object-contain rounded-full' src={comment.user.image_url} alt="image_url" />
          <div className='flex justify-between'>
            <div >
              <h4 className=' text-f-dark-blue'>{ comment.user.username}</h4>
              <p className=' text-f-dark-blue-300 text-xs dark:text-f-dark-blue-300'>{"@"+ comment.user.email}</p>
          </div>
          
          {form ? (
            <button onClick={handleHideForm} className='underline text-f-purple '>reply</button>
          ) : (
              
              <button onClick={handleShowForm} className='underline text-f-purple '>reply</button>
          )}
          </div>

        <p className='mt-3 '>{comment.content}</p>
        {form ? (
            <form onSubmit={handleFormSubmit} className='flex gap-2 my-4' >
            <textarea onChange={handleInputChange}  placeholder='Type Your comment here' name="content"  className='py-4 px-5 bg-light-white-100 w-full flex-5 lg:flex-3' ></textarea>
            <button  className='border-none h-fit  py-2 lg:px-1  text-xs lg:text-sm text-white rounded-md bg-f-purple flex-2 lg:flex-4'>Post Reply</button>
          </form>
          ) : ''}

      </div>
      </div>
  )
}

export default Comment


