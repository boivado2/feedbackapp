/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext,useState} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Joi from 'joi-browser';
import FeedbackContext from './../context/feeds/feedbackContext';
import Comments from './Comments';
import FeedPost from './FeedPost';
import Textarea from './common/Textarea';
import validateFormInput from './utils/validateFormInput';
import Btn from './common/Btn';
import Goback from './common/Goback';
import Spinner from './common/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleFeedback, loadFeedbacks, upvoteFeedback,loadFeedback} from '../app/feedback'
import { addComment, loadcomments } from '../app/comments';



function FeedbackDetail() {
  const { id } = useParams()

  const dispatch = useDispatch()
  const feedback = useSelector(state => state.entities.feedbacks.feedback)
  const singleFeedback = useSelector(getSingleFeedback(id))
  const loading = useSelector(state => state.entities.feedbacks.loading)
  const comments = useSelector(state => state.entities.comments.list)
  const error = useSelector(state => state.entities.feedbacks.error)
  const navigate = useNavigate()
  const { clearError } = useContext(FeedbackContext)
  const [comment, setComment] = useState({content: "",})
  const [textCharactersLeft, setTextCharactersLeft] = useState(250)
  const [errors, setErrors] = useState({})


  useEffect(() => {
    dispatch(loadFeedbacks())
    dispatch(loadFeedback(id))
    dispatch(loadcomments(id))
    if (error === 'suggestion not found' || error === "Invalid Id") {
      navigate('/')
      toast.error("suggestion not found")
      clearError()
    }
  }, [error, id])


  const handleTextCount = () => {
    setTextCharactersLeft(250 - comment.content.length  )
  }

  const schema = Joi.object({
    content: Joi.string().min(4).max(225).required(),
  })


  const onFormSubmit = (e) => {
    e.preventDefault()
    const errors = validateFormInput(comment, schema)
    if (errors) {
      setErrors(errors)
    } else {
      dispatch(addComment(comment, id))
      setComment({content: ''})
      setErrors({})
      setTextCharactersLeft(250)
    }

  }

  const onHandleInput = (e) => {
    setComment({...comment, content: e.target.value})

  }
  
  const { content } = comment
  

    return (
    
      <div className={`lg:container mx-auto  px-6 py-10  md:px-24 md:py-10 flex  flex-col h-screen  gap-3`}>
        {loading ?
          <Spinner />
          :
          (
            <>
           <div className='flex justify-between items-center'>
           <Goback color="text-black" />
           <Link to={`/suggestions/${id}`} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-blue-100'>Edit Feedback</Link>
         </div>
              <FeedPost feedback={singleFeedback || feedback} handleUpvote={() => dispatch(upvoteFeedback(singleFeedback._id))} />
         <Comments id={id} />
 
         <div className="flex bg-white flex-col p-5">
           <form onSubmit={onFormSubmit} className="flex flex-col" >
             <Textarea name="content" value={content} onChange={onHandleInput} label="Add Comment" holder="Type your comment here" error={errors.content} handleTextCount={handleTextCount} />
             <div className='flex justify-between  mt-2'>
               <span className='text-xs sm:text-base text-custom-color-blue-200'>{textCharactersLeft} Characters left</span>
               <Btn title="Post Comment" styles=" bg-custom-color-purple" />
 
             </div>
           </form>
              </div>
          </>
          
        )}
       
        </div>
    )
}

export default FeedbackDetail
