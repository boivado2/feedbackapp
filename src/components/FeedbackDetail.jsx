/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import FeedbackContext from './../context/feeds/feedbackContext';
import Comments from './Comments';
import FeedPost from './FeedPost';
import AuthContext from './../context/auth/authContext';

function FeedbackDetail() {
  const { user } = useContext(AuthContext)
  const { getFeedback, feedback, addComment, getComments, comments } = useContext(FeedbackContext)
  const { suggestionId } = useParams()
  
  const [comment, setComment] = useState({
    content: "",
    userId: user._id
  })

  
  useEffect(() => {
    getFeedback(suggestionId)
    getComments(suggestionId)
  },[suggestionId, comments])
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    addComment(comment, suggestionId)
    setComment({content: '', userId: ""})
  }

  const onFormInput = (e) => {
    setComment({...comment, content: e.target.value})

  }
  if (feedback === null) return <h1>Loading</h1>
  const {content} = comment
  return (
    <div className='lg:container mx-auto px-6 py-10 md:px-24 md:py-10 flex  flex-col  gap-3'>
      <div className='flex justify-between items-center'>
      <Link className='' to="/">go back</Link>
      <button  className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-light-blue'>Edit Feedback</button>
      </div>
      <FeedPost feedback={feedback} />
      <Comments comments={comments}/>

      <div className="flex bg-white flex-col p-5">
        <h3 className='text-xl'>Add Comment</h3>
        <form onSubmit={onFormSubmit} >
        <textarea onChange={onFormInput}  placeholder='Type Your comment here' name="content" value={content} className='py-4 px-5 bg-light-white-100 w-full my-6' ></textarea>
          <button className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple'>Post Comment</button>
        </form>
      </div>
    </div>
  )
}

export default FeedbackDetail