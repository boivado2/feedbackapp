/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import _ from 'lodash'
import feedbackContext from '../context/feeds/feedbackContext'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';
import filteredByStatus from './utils/filteredByStatus'


function FeedPosts() {
  const { getFeedbacks, feedbacks, menuItem, selectedCategory } = useContext(feedbackContext)

  
  const handleUpvotes = (id) => {
    alert("feature wiil soon be implemented")
    
  }
  useEffect(() => {
    getFeedbacks()
  }, [feedbacks.length])

  const allSuggestionFeedback = filteredByStatus(feedbacks, 'suggestion')
  

  const filtered = selectedCategory && selectedCategory._id ? allSuggestionFeedback.filter(feedback => feedback.category._id === selectedCategory._id) : allSuggestionFeedback

  const sorted= _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder])


  if (!feedbacks) return <NoFeedback />  
  if(!allSuggestionFeedback) return <p>No Suggestion</p>
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
     {sorted.map(feedback => feedback.status === 'suggestion' ? <FeedPost onClick={handleUpvotes} key={feedback._id} feedback={feedback}/>: 'No suggeston Avaliable')}
    </div>
  )
}

export default FeedPosts