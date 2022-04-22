/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import _ from 'lodash'
import { toast } from 'react-toastify'
import feedbackContext from '../context/feeds/feedbackContext'
import AppContext  from '../context/app/appContext'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';
import filteredByStatus from './utils/filteredByStatus'
import Spinner from './common/Spinner'


function FeedPosts() {
  const { getFeedbacks, feedbacks, loading } = useContext(feedbackContext)
  const { menuItem, selectedCategory } = useContext(AppContext)


  const allSuggestionFeedback =  filteredByStatus(feedbacks, 'suggestion')

  
  const handleUpvotes = (id) => {
    toast("feature wiil soon be implemented")
    
  }

  
  useEffect(() => {
    getFeedbacks()

  }, [allSuggestionFeedback.length])

  const filtered = selectedCategory && selectedCategory._id ? allSuggestionFeedback.filter(feedback => feedback.category._id === selectedCategory._id) : allSuggestionFeedback

  const sorted = _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder])

  

  if(loading) return <Spinner/>
  
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0 justify-center items-center'>
      {!feedbacks.length &&  <NoFeedback/> }
      {sorted.map(feedback => <FeedPost  onClick={handleUpvotes} key={feedback._id} feedback={feedback}/>)}
    </div>
  )
}

export default FeedPosts


