/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import FeedbackContext from './../context/feeds/feedbackContext';

function FeedbackForm() {

  const { addFeedback, getCategories, categories } = useContext(FeedbackContext)
  
  useEffect(() => {
    getCategories()
  },[])
  

  const navigate = useNavigate()
  const [feedback, setFeedback] = useState({
    title: '',
    categoryId: "",
    description: ""
  })


  const onHandleForm = (e) => {
    e.preventDefault()
    addFeedback(feedback)
    navigate('/')
  }

  const onHandleChange  = (e) => {
  setFeedback({...feedback, [e.target.name]: e.target.value})
  }

  const onHandleCancel = () => {
    navigate('/')
    setFeedback(
      {
        title: '',
        categoryId: "",
        description: ""
      }
    )
  }
  const {title, categoryId, description} = feedback
  return (
    <div className='sm:container mx-auto p-6 md:px-28 lg:px-56 flex flex-col justify-between'>

      <Link className='pb-10' to="/">go back</Link>

      <form onSubmit={onHandleForm} className='bg-white rounded-xl p-4 flex flex-col gap-4'>
        <div className='flex flex-col'>
          <h4 className='text-lg'>Feedback Title</h4>
          <span className='text-sm my-2'>Add a short, descriptive headline</span>
          <input onChange={onHandleChange} name="title" value={title} className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' type="text"/>
        </div>


        <div className='flex flex-col'>
          <h4 className='text-lg'>Category</h4>
          <span className='text-sm my-2'>Choose a category for your feedback</span>
          <select value={categoryId} onChange={onHandleChange} name='categoryId' className='py-2 rounded-lg px-8 bg-light-white-100 outline-none' >
          {categories.map(category => (
          <option selected key={category._id} value={category._id}>{category.title}</option>
        ))}
          </select>
        </div>

        <div className='flex flex-col '>
          <h4 className='text-lg'>Feedback Detail</h4>
          <span className='text-sm my-2'>Include any specific comments on what should be improved, added, etc</span>
          <textarea value={description} onChange={onHandleChange} name='description' className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' ></textarea>
        </div>

        <div className='flex flex-col'>
          <button  className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple mb-2'> Add Feedback</button>
          <button onClick={onHandleCancel} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-blue-200'>Cancel</button>

        </div>
      </form>
    </div>
  )
}

export default FeedbackForm