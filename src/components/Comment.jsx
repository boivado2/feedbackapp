/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react'
import AuthContext from './../context/auth/authContext';
import FeedbackContext from './../context/feeds/feedbackContext';




function Comment({ comment }) {
  const { user } = useContext(AuthContext)
  const { addComment } = useContext(FeedbackContext)

  

  const [form, setForm] = useState(false)

  const [reply, setReply] = useState({
    content: "",
    userId: user._id,
    parentId: comment._id,
    replyingTo: comment.user.username
  })


  const handleFormSubmit = (e) => { 
    e.preventDefault()
    console.log(reply)
    addComment(reply, comment.suggestionId)
    setForm(false)
    
  }

  const handleInputChange = (e) => {
    setReply({...reply, content: e.target.value})
  }

  const handleShowForm = () => {
    setForm(true)
  }

  const handleHideForm = () => {
    setForm(false)
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
            <form onSubmit={handleFormSubmit} className='flex gap-2 my-4' >
            <textarea value={reply.content} onChange={handleInputChange}  placeholder='Type Your comment here' name="content"  className='py-4 px-5 bg-light-white-100 w-full flex-5 lg:flex-3' ></textarea>
            <button  className='border-none h-fit  py-2 lg:px-1  text-xs lg:text-sm text-white rounded-md bg-f-purple flex-2 lg:flex-4'>Post Reply</button>
          </form>
        ) : ''}
        
        {comment.replies && comment.replies.map(reply => (
          <Comment key={reply._id} comment={reply}/>
        ))}

      </div>
  )
}

export default Comment


