/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import AuthContext from './../context/auth/authContext';
import FeedbackContext from './../context/feeds/feedbackContext';
import  Joi  from 'joi-browser';
import validateFormInput from './utils/validateFormInput';
import Textarea from './common/Textarea';
import Btn from './common/Btn';




function Comment({ comment }) {
  const { user } = useContext(AuthContext)
  const { addComment } = useContext(FeedbackContext)

  

  const [form, setForm] = useState(false)
  const [errors, setErrors] = useState({})

  const [reply, setReply] = useState({
    content: "",
    parentId: comment._id,
    replyingTo: comment.user.username
  })


  const schema = Joi.object({
    content: Joi.string().min(4).max(225).required(),
    parentId: Joi.string(),
    replyingTo: Joi.string()
  })


  const handleFormSubmit = (e) => { 
    e.preventDefault()

    const errors = validateFormInput(reply, schema)
    if (errors) {
      setErrors(errors)
    } else {
      addComment(reply, comment.suggestionId)
      setForm(false)
      setErrors({})
    }
  
    
  }

  const onHandleInput = (e) => {
    setReply({...reply, content: e.target.value})
  }

  const handleShowForm = () => {
    setForm(true)
  }

  const handleHideForm = () => {
    setForm(false)
    setErrors({})
  }
  return (
    <div className='w-full flex flex-col p-2 sm:px-9 mt-3'>
      <div className='flex justify-between'>
        <div className='flex' >
          <img className=' w-14 h-14 object-contain rounded-full' src={comment.user.image_url} alt="image_url" />
            <div className='p-4'>
            <h4 className=' text-f-dark-blue'>{ comment.user.name}</h4>
              <p className=' text-f-dark-blue-300 text-xs dark:text-f-dark-blue-300'>{"@"+ comment.user.username}</p>
          </div>
        </div>
          
          {form ? (
            <button onClick={handleHideForm} className='underline text-f-purple '>reply</button>
          ) : (
              
              <button onClick={handleShowForm} className='underline text-f-purple '>reply</button>
          )}
          </div>

        <p className='mt-3 px-3 sm:ml-14 break-all'>
          {comment.replyingTo
            && <span className=' mr-3'>{'@'+comment.replyingTo}</span>}
          {comment.content}
        </p>
        {form ? (
            <form onSubmit={handleFormSubmit} className='flex gap-2 my-4 flex-col md:flex-row sm:ml-14' >
          <Textarea name="content" value={reply.content} onChange={onHandleInput} holder="Type your comment here" error={errors.content} styles="md:flex-5" />
          <Btn title="Post Reply" styles=" bg-f-purple mt-3  lg:px-1 h-fit md:flex-2 w-fit"/>

          </form>
        ) : ''}
        
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply._id} comment={reply}/>
        ))}

      </div>
  )
}

export default Comment


