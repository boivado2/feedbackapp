/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import FeedbackContext from './../context/feeds/feedbackContext';
import Comments from './Comments';
import FeedPost from './FeedPost';
import Textarea from './common/Textarea';
import Joi from 'joi-browser';
import validateFormInput from './utils/validateFormInput';
import Btn from './common/Btn';
import Goback from './common/Goback';

function FeedbackDetail() {
  const { getFeedback, feedback, addComment, getComments, comments } = useContext(FeedbackContext)
  const { id } = useParams()
  
  const [comment, setComment] = useState({
    content: "",
  })

  const [textCharactersLeft, setTextCharactersLeft] = useState(250)
  const [errors, setErrors] = useState({})


  const handleTextCount = () => {
    setTextCharactersLeft(250 - comment.content.length  )
  }

  const schema = Joi.object({
    content: Joi.string().min(4).max(225).required(),
  })


  useEffect(() => {
    getFeedback(id)
    getComments(id)
  }, [comments.length, id])
  

  
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


  if (feedback === null) return <h1>Loading</h1>
  const {content} = comment
  return (
    <div className='lg:container mx-auto px-6 py-10 md:px-24 md:py-10 flex  flex-col  gap-3'>
      <div className='flex justify-between items-center'>
        <Goback color="text-black"/>
      <Link to={`/feedback/${id}`} className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-light-blue'>Edit Feedback</Link>
      </div>
      <FeedPost feedback={feedback} />
      <Comments comments={comments}/>

      <div className="flex bg-white flex-col p-5">
        <form onSubmit={onFormSubmit} className="flex flex-col" >
          <Textarea name="content" value={content} onChange={onHandleInput} label="Add Comment" holder = "Type your comment here" error={errors.content} handleTextCount={handleTextCount} />
          <div className='flex justify-between  mt-2'>
            <span className='text-xs sm:text-base'>{textCharactersLeft} Characters left</span>
            <Btn title="Post Comment" styles=" bg-f-purple" />

        </div>
        </form>
      </div>
    </div>
  )
}

export default FeedbackDetail