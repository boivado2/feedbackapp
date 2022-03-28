/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import { Link,useNavigate, useParams  } from 'react-router-dom';
import FeedbackContext from './../context/feeds/feedbackContext';

function FeedbackForm() {

  const { addFeedback, getCategories, categories, feedback, updateFeedback } = useContext(FeedbackContext)
  
  const {id} = useParams()
  useEffect(() => {
    getCategories()
    if (id === 'new') return
    setSuggestion(mapToViewModel(feedback))
  },[])
  
  const mapToViewModel =  (feedback) => {
    return {
      _id: feedback._id,
      title: feedback.title,
      description: feedback.description,
      upvotes: feedback.upvotes,
      status: feedback.status,
      categoryId: feedback.category._id,
   }
 }

  const navigate = useNavigate()
  const [suggestion, setSuggestion] = useState({
    title: '',
    categoryId: "",
    description: ""
  })


  const onHandleForm = (e) => {
    e.preventDefault()
    if (suggestion._id) {
      updateFeedback(suggestion)
    } else {
      addFeedback(suggestion)
    }
    navigate('/')
  }

  const onHandleChange  = (e) => {
  setSuggestion({...suggestion, [e.target.name]: e.target.value})
  }

  const onHandleCancel = () => {
    navigate('/')
    setSuggestion(
      {
        title: '',
        categoryId: "",
        description: ""
      }
    )
  }

  const onHandleDelete = () => {
 
  }
  const {title, categoryId, description} = suggestion
  return (
    <div className='sm:container mx-auto p-6 md:px-28 lg:px-56 flex flex-col justify-between'>

      <Link className='pb-10' to="/">go back</Link>

      <form onSubmit={onHandleForm} className='bg-white rounded-xl p-4 flex flex-col gap-4'>
        {!suggestion._id ?
          (
                  <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Create New Feedback</h2>
          )
          :
          (
            <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Editing { `"${feedback.title}"`}</h2>
          )}
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
          <option key={category._id} value={category._id}>{category.title}</option>
        ))}
          </select>
        </div>

        {suggestion.status &&
          <div className='flex flex-col'>
          <h4 className='text-lg'>Update Status</h4>
            <span className='text-sm my-2'>Change Feature State</span>
          <select value={suggestion.status} onChange={onHandleChange} name='status' className='py-2 rounded-lg px-8 bg-light-white-100 outline-none' >
              <option value="suggestion">Suggestion</option>
              <option  value="planned">Planned</option>
              <option  value="live">Live</option>
              <option  value="in-progress">In-Progress</option>
          </select>
          </div>
        }

        <div className='flex flex-col '>
          <h4 className='text-lg'>Feedback Detail</h4>
          <span className='text-sm my-2'>Include any specific comments on what should be improved, added, etc</span>
          <textarea value={description} onChange={onHandleChange} name='description' className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' ></textarea>
        </div>

        <div className='flex flex-col'>
          <button  className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple mb-2'> Add Feedback</button>
          <button onClick={onHandleCancel} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-blue-200 my-3'>Cancel</button>
          {
            suggestion._id
            &&
            <button onClick={() => onHandleDelete(feedback._id)} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-blue-200'>delete</button>
          }

        </div>
      </form>
    </div>
  )
}

export default FeedbackForm