/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import  Joi  from 'joi-browser';
import FeedbackContext from './../context/feeds/feedbackContext';
import Input from './common/Input';
import Select from './common/Select';
import validateFormInput from './utils/validateFormInput';
import Textarea from './common/Textarea';
import Btn from './common/Btn';
import newFeedbackSvg from '../shared/icon-new-feedback.svg';
import editFeedbackSvg from '../shared/icon-edit-feedback.svg';
import Goback from './common/Goback';
import { addFeedback, deleteFeedback, loadFeedback, updateFeedback } from '../app/feedback';
import { useDispatch } from 'react-redux';
import { loadcategories } from './../app/categories';
import { useSelector } from 'react-redux';
import httpService from '../services/httpService';


const status = [
  "suggestion",
  "planned",
  "in-progress",
  "live"
]


function FeedbackForm() {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.entities.categories.list)
  const feedback = useSelector(state => state.entities.feedbacks.feedback)
  const navigate = useNavigate()
  const { id } = useParams()


  const [suggestion, setSuggestion] = useState({
    title: '',
    categoryId: "",
    description: ""
  })
  const [errors, setErros] = useState({})
  
  const populateFeedback =  async() => {
    if (id === 'new') return
    const res = await httpService.get(`/suggestions/${id}`)
    setSuggestion(mapToViewModel(res.data))
  } 

  useEffect(() => {
    dispatch(loadcategories())
    populateFeedback()
  }, [])
  
  const schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required(),
    categoryId: Joi.string().required(),
    description: Joi.string().required(),
    upvotes: Joi.array(),
    status: Joi.string()
  })
  
  const mapToViewModel =  (feedback) => {
    return {
      _id: feedback?._id,
      title: feedback?.title,
      description: feedback?.description,
      upvotes: feedback?.upvotes,
      status: feedback?.status,
      categoryId: feedback?.category?._id,
   }
 }


  const onSubmitForm = (e) => {
    e.preventDefault()
    const errors = validateFormInput(suggestion, schema)
    if (errors) {
      setErros(errors)
    } else {
      if (suggestion._id) {
        dispatch(updateFeedback(suggestion))
      } else {
       dispatch(addFeedback(suggestion))
      }
      navigate(-1)
    }
    


  }

  const onHandleChange  = (e) => {
  setSuggestion({...suggestion, [e.target.name]: e.target.value})
  }

  const onHandleCancel = () => {
    navigate(-1)
    // setSuggestion(
    //   {
    //     title: '',
    //     categoryId: "",
    //     description: ""
    //   }
    // )
  }

  const onHandleDelete = (id) => {
    console.log(id)
    dispatch(deleteFeedback(id))
      navigate('/')
  }


  const { title, categoryId, description } = suggestion
  
  return (
    <div className=' bg-custom-color-white-200'>
    <div className='sm:container mx-auto p-6 md:px-28 lg:px-56 flex flex-col justify-between'>
  <Goback color="text-black"/>
      <form onSubmit={onSubmitForm} className='bg-white rounded-xl p-4 flex flex-col gap-4 mt-4'>
        <div className=' absolute top-16'>
          {suggestion._id ? <img src={ editFeedbackSvg} alt="" /> : <img width="40px" src={ newFeedbackSvg} alt=""/>}
        </div>

        {!suggestion._id ?
          (
                  <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Create New Feedback</h2>
          )
          :
          (
            <h2 className='text-2xl text-f-dark-blue-300 my-6 dark:text-black'>Editing { `"${title}"`}</h2>
          )}

        <Input value={title} onChange={onHandleChange} name="title" label="Feedback Title" desc='Add a short, descriptive headline' error={errors.title}  />
        

        <div className='flex flex-col'>
          <Select onChange={onHandleChange}
            value={categoryId} name="categoryId" items={categories} error={errors.categoryId} label="Category" desc="Choose a category for your feedback" />
        </div>

        {suggestion._id &&
  
            <Select items={status}
              onChange={onHandleChange} name="status" value={suggestion?.status} label="Update Status" desc = 'Change Feature State' error={errors.status} />
        }

      
          <Textarea value={description} onChange={onHandleChange} name="description" error={errors.description} label="Feedback Detail" desc="Include any specific comments on what should be improved, added, etc"/>

        <div className='flex flex-col-reverse sm:flex-row sm:justify-between my-4'>
        {
            suggestion._id
            &&
            <Btn title="Delete" onClick={() => onHandleDelete(suggestion?._id)} styles=" bg-custom-color-red-200 hover:bg-custom-color-red-100"/>
          }
          <div className='flex flex-col my-2 sm:my-0 sm:block'>
            {
              suggestion._id ?
                  (
                    <Btn title="Save Feedback" styles="bg-custom-color-purple sm:mr-2 my-2 sm:my-0" />)
                  :
                (
                    <Btn title="Add Feedback" styles="bg-custom-color-purple sm:mr-2 my-2 sm:my-0" />
                  )
          }
            
            <Btn  title="Cancel" onClick={onHandleCancel} styles=" bg-custom-color-blue-300"/>
      
          </div>

        </div>
      </form>
      </div>
      </div>
  )
}

export default FeedbackForm