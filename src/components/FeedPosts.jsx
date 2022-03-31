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
  }, [feedbacks.length])


  const filtered = selectedCategory && selectedCategory._id ? feedbacks.filter(feedback => feedback.category._id === selectedCategory._id) : feedbacks

  const sortedFeedback = _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder])

  const filteredByStatus = (status) => {
    return sortedFeedback.filter(feedback => feedback.status === status)
  }

  if (sortedFeedback.length === 0) return <NoFeedback />  
  if(filteredByStatus('suggestion').length === 0) return <p>No Suggestion</p>
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
     {filteredByStatus('suggestion').map(feedback => feedback.status === 'suggestion' ? <FeedPost key={feedback._id} feedback={feedback}/>: 'No suggeston Avaliable')}
    </div>
  )
}

export default FeedPosts