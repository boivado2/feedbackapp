import React, { useContext, useEffect } from 'react'
import feedbackContext from '../context/feeds/feedbackContext'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';

function FeedPosts({selectedCategory}) {
  const { getFeedback, feedbacks } = useContext(feedbackContext)
  useEffect(() => {
    getFeedback()
  }, [])


  const filtered = selectedCategory && selectedCategory.id ? feedbacks.filter(feedback => feedback.category === selectedCategory.name.toLowerCase()) : feedbacks

 if (filtered.length === 0) return <NoFeedback/>  
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
     {filtered.map(feedback => <FeedPost key={feedback.id} feedback={feedback}/>)}
    </div>
  )
}

export default FeedPosts