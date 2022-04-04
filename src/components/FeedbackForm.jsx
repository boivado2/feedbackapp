/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import  Joi  from 'joi-browser';
import FeedbackContext from './../context/feeds/feedbackContext';
import Input from './common/Input';
import Select from './common/Select';
import validateFormInput from './utils/validateFormInput';
import Textarea from './common/Textarea';

function FeedbackForm() {

  const { addFeedback, getCategories, categories, feedback, updateFeedback, deleteFeedback } = useContext(FeedbackContext)

  const navigate = useNavigate()
  const [suggestion, setSuggestion] = useState({
    title: '',
    categoryId: "",
    description: ""
  })
  const [errors, setErros] = useState({})
  
  const {id} = useParams()
  useEffect(() => {
    getCategories()
    if (id === 'new') return
    setSuggestion(mapToViewModel(feedback))
  }, [])
  
  const schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required(),
    categoryId: Joi.string().required(),
    description: Joi.string().required(),
    upvotes: Joi.number(),
    status: Joi.string()
  })
  
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


  const onSubmitForm = (e) => {
    e.preventDefault()
    const errors = validateFormInput(suggestion, schema)
    if (errors) {
      setErros(errors)
    } else {
      if (suggestion._id) {
        updateFeedback(suggestion)
      } else {
        addFeedback(suggestion)
      }
      navigate('/')
    }

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

  const onHandleDelete = (id) => {
    deleteFeedback(id)
    navigate('/')
 
  }

  const status = [
    "suggestion",
    "planned",
    "in-progress",
    "live"
  ]

  const {title, categoryId, description} = suggestion
  return (
    <div className='sm:container mx-auto p-6 md:px-28 lg:px-56 flex flex-col justify-between'>

      <Link className='pb-10' to="/">go back</Link>

      <form onSubmit={onSubmitForm} className='bg-white rounded-xl p-4 flex flex-col gap-4'>
        {!suggestion._id ?
          (
                  <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Create New Feedback</h2>
          )
          :
          (
            <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Editing { `"${feedback.title}"`}</h2>
          )}

        <Input value={title} onChange={onHandleChange} name="title" label="Feedback Title" desc='Add a short, descriptive headline' error={errors.title}  />
        

        <div className='flex flex-col'>
          <Select onChange={onHandleChange}
            value={categoryId} name="categoryId" items={categories} error={errors.categoryId} label="Category" desc="Choose a category for your feedback" />
        </div>

        {suggestion.status &&
  
            <Select items={status}
              onChange={onHandleChange} name="status" value={suggestion.status} label="Update Status" desc = 'Change Feature State' />
        }

      
          <Textarea value={description} onChange={onHandleChange} name="description" error={errors.description} label="Feedback Detail" desc="Include any specific comments on what should be improved, added, etc"/>

        <div className='flex flex-col-reverse sm:flex-row sm:justify-between my-4'>
        {
            suggestion._id
            &&
            <button onClick={() => onHandleDelete(feedback._id)} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-red hover:bg-f-light-red'>Delete</button>
          }
          <div className='flex flex-col my-2 sm:my-0 sm:block'>
            {
              suggestion._id ?
                (  <button className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple sm:mr-2 my-2 sm:my-0'> Save Changes</button>)
                  :
                (  <button className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple  sm:mr-2 my-2 sm:my-0'> Add Feedback</button>)
          }
            
          <button onClick={onHandleCancel} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-dark-blue-200'>Cancel</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default FeedbackForm