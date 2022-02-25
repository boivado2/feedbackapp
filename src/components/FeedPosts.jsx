import React, { useContext, useEffect } from 'react'
import feedbackContext from '../context/feeds/feedbackContext'
import FeedPost from './FeedPost'

function FeedPosts() {
  const { getFeedback, feedbacks } = useContext(feedbackContext)
  useEffect(() => {
    getFeedback()
  }, [])
  
  
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
     {feedbacks.map(feedback => <FeedPost key={feedback.id} feedback={feedback}/>)}
    </div>
  )
}

export default FeedPosts