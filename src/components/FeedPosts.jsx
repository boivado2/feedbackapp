/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import _ from 'lodash'
import feedbackContext from '../context/feeds/feedbackContext'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';


function FeedPosts() {
  const { getFeedbacks, feedbacks, menuItem, selectedCategory } = useContext(feedbackContext)
  useEffect(() => {
    getFeedbacks()
  }, [])


  const filtered = selectedCategory && selectedCategory._id ? feedbacks.filter(feedback => feedback.category._id === selectedCategory._id) : feedbacks

  const sorted = _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder])


 if (sorted.length === 0) return <NoFeedback/>  
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
     {sorted.map(feedback => <FeedPost key={feedback._id} feedback={feedback}/>)}
    </div>
  )
}

export default FeedPosts