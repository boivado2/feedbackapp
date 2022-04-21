/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import FeedbackContext from './../context/feeds/feedbackContext';
import  Joi  from 'joi-browser';
import validateFormInput from './utils/validateFormInput';
import Textarea from './common/Textarea';
import Btn from './common/Btn';


function Reply({reply, parentId,  suggestionId}) {

  const { addComment } = useContext(FeedbackContext)

  

  const [form, setForm] = useState(false)
  const [errors, setErrors] = useState({})

  const [subComment, setSubComment] = useState({
    content: "",
    parentId,
    replyingTo: reply.user.username
  })


  const schema = Joi.object({
    content: Joi.string().min(4).max(225).required(),
    parentId: Joi.string(),
    replyingTo: Joi.string()
  })


  const handleFormSubmit = (e) => { 
    e.preventDefault()

    console.log(subComment)
    const errors = validateFormInput(subComment, schema)
    if (errors) {
      setErrors(errors)
    } else {
      addComment(subComment, suggestionId)
      setForm(false)
      setErrors({})
    }
  
    
  }

  const onHandleInput = (e) => {
    setSubComment({...subComment, content: e.target.value})
  }

  const handleShowForm = () => {
    setForm(true)
  }

  const handleHideForm = () => {
    setForm(false)
    setErrors({})
  }

  return (
    <div className='w-full flex flex-col p-4 sm:px-9'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center justify-between' >
          <div className='flex justify-between'>
          <img className=' w-8 h-8 object-contain rounded-full mr-3' src={reply.user.image_url} alt="image_url" />
            <div>
            <h4 className=' text-custom-color-blue-400'>{ reply.user.name}</h4>
              <p className=' text-custom-color-blue-200 text-xs dark:text-custom-color-blue-200'>{"@"+ reply.user.username}</p>
         </div>
          </div>
                 
          <div>
          {form ? (
            <button onClick={handleHideForm} className=' text-custom-color-blue-100'>Reply</button>
          ) : (
              
              <button onClick={handleShowForm} className=' text-custom-color-blue-100'>Reply</button>
          )}
      </div>
        </div>
   
        <p className='mt-3 text-custom-color-blue-200 sm:ml-14 break-all'>
          {reply.replyingTo
            && <span className=' mr-3 text-custom-color-purple'>{'@'+reply.replyingTo}</span>}
          {reply.content}
        </p>
          </div>

        {form ? (
            <form onSubmit={handleFormSubmit} className='flex gap-2 my-4 flex-col md:flex-row sm:ml-14' >
          <Textarea name="content" value={subComment.content} onChange={onHandleInput} holder="Type your comment here" error={errors.content} styles="md:flex-5" />
          <Btn title="Post Reply" styles=" bg-custom-color-purple mt-3  lg:px-1 h-fit md:flex-2 w-fit"/>

          </form>
        ) : ''}

      </div>
  )
}

export default Reply