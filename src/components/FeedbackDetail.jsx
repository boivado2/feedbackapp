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



function FeedbackDetail() {
  
  const { id } = useParams()
  const navigate = useNavigate()
  const { getFeedback, feedback, addComment, getComments, comments, loading, error, clearError } = useContext(FeedbackContext)
  
  const [comment, setComment] = useState({content: "",})
  const [textCharactersLeft, setTextCharactersLeft] = useState(250)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    getFeedback(id)
    getComments(id)
    if (error === 'suggestion not found' || error === "Invalid Id") {
      navigate('/')
      toast.error("suggestion not found")
      clearError()
    }
  }, [comments.length, error])


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
      addComment(comment, id)
      setComment({content: ''})
      setErrors({})
      setTextCharactersLeft(250)
    }

  }

  const onHandleInput = (e) => {
    setComment({...comment, content: e.target.value})

  }
  
  const { content } = comment
  
  if (loading) {
    return <Spinner />
  } else {

    return (
      <div className='bg-custom-color-white-200'>
      <div className='lg:container mx-auto px-6 py-10  md:px-24 md:py-10 flex  flex-col h-screen  gap-3'>
        <div className='flex justify-between items-center'>
          <Goback color="text-black" />
          <Link to={`/suggestions/${id}`} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-custom-color-blue-100'>Edit Feedback</Link>
        </div>
        <FeedPost feedback={feedback} />
        <Comments comments={comments} />

        <div className="flex bg-white flex-col p-5">
          <form onSubmit={onFormSubmit} className="flex flex-col" >
            <Textarea name="content" value={content} onChange={onHandleInput} label="Add Comment" holder="Type your comment here" error={errors.content} handleTextCount={handleTextCount} />
            <div className='flex justify-between  mt-2'>
              <span className='text-xs sm:text-base text-custom-color-blue-200'>{textCharactersLeft} Characters left</span>
              <Btn title="Post Comment" styles=" bg-custom-color-purple" />

            </div>
          </form>
        </div>
        </div>
        </div>
    )
  }
}

export default FeedbackDetail
