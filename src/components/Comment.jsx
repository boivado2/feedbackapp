/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import FeedbackContext from './../context/feeds/feedbackContext';
import  Joi  from 'joi-browser';
import validateFormInput from './utils/validateFormInput';
import Textarea from './common/Textarea';
import Btn from './common/Btn';
import Reply from './Reply';




function Comment({ comment }) {

  const { addComment } = useContext(FeedbackContext)

  const [form, setForm] = useState(false)



  const [errors, setErrors] = useState({})

  const [subComment, setSubComment] = useState({
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

    const errors = validateFormInput(subComment, schema)
    if (errors) {
      setErrors(errors)
    } else {
      addComment(subComment, comment.suggestionId)
      setForm(false)
      setErrors({})
    }
  
    
  }





  const onHandleInput = (e) => {
    setSubComment({ ...subComment, content: e.target.value })
  }

  return (
    <div className={`w-full flex flex-col p-2`}>
      <div className='flex flex-col justify-between pr-9'>
        <div className='flex items-center justify-between' >
          <div className='flex items-center'>
          <img className=' w-8 h-8 object-contain rounded-full mr-3' src={comment.user.image_url} alt="image_url" />
            <div>
            <h4 className=' text-custom-color-blue-400'>{ comment.user.name}</h4>
              <p className=' text-custom-color-blue-200 text-xs dark:text-custom-color-blue-200'>{"@"+ comment.user.username}</p>
         </div>
          </div>
          <div>
          {form ? (
            <button onClick={() => setForm(false)} className=' text-custom-color-blue-100 '>Reply</button>
          ) : (
              
              <button onClick={() => setForm(true)} className=' text-custom-color-blue-100 '>Reply</button>
        )}
    </div>
        </div>
                <p className={`mt-3 text-custom-color-blue-200 sm:ml-14 break-all `}>
          {comment.replyingTo
            && <span className='text-custom-color-purple mr-3'>{'@'+comment.replyingTo}</span>}
          {comment.content}
      </p>
      </div>

      
      {form ? (
            <form onSubmit={handleFormSubmit} className='flex gap-2 my-1 flex-col md:flex-row sm:ml-14' >
          <Textarea name="content" value={subComment.content} onChange={onHandleInput} holder="Type your comment here" error={errors.content} styles="md:flex-5" />
          <Btn title="Post Reply" styles=" bg-custom-color-purple mt-3  lg:px-1 h-fit md:flex-2 w-fit"/>

          </form>
        ) : ''}
        
      <div className='border-l-2 mt-3 pl-3'>
      {comment.replies && comment.replies.map(reply => (
          <Reply key={reply._id} reply={reply} parentId={comment._id} suggestionId={comment.suggestionId}/>
        ))}
      </div>
    </div>
  )
}

export default Comment


