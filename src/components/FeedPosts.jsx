/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useMemo } from 'react'
import _ from 'lodash'
import feedbackContext from '../context/feeds/feedbackContext'
import AppContext  from '../context/app/appContext'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';
import getFeedbackByStatus from './utils/getFeedbackByStatus'
import Spinner from './common/Spinner'


function FeedPosts() {
  const { getFeedbacks, feedbacks, loading } = useContext(feedbackContext)
  const { menuItem, selectedCategory } = useContext(AppContext)


  const getSuggestionFeedback = useMemo(() => getFeedbackByStatus(feedbacks, 'suggestion'),[feedbacks])

  const filtered = useMemo(() => selectedCategory && selectedCategory._id ? getSuggestionFeedback.filter(feedback => feedback.category.title === selectedCategory.title) : getSuggestionFeedback,[selectedCategory, getSuggestionFeedback])


  const sorted = useMemo(() => _.orderBy(filtered, [menuItem.sortPath], [menuItem.sortOrder]),[filtered, menuItem])

  
  
  useEffect(() => {
    getFeedbacks()
  }, [sorted.length])

  
  if (loading) return <Spinner />

  const suggestionFeedbackLength = getSuggestionFeedback.length
  const sortedLength = sorted.length
  
  return (
    <div className='p-3 flex flex-col gap-2 h-auto sm:p-0 justify-center items-center'>
      {sortedLength === 0 || suggestionFeedbackLength === 0 ? <NoFeedback suggestionFeedbackLength={suggestionFeedbackLength} /> : sorted.map(feedback => <FeedPost  key={feedback._id} feedback={feedback}/>)}
    </div>
  )
}

export default FeedPosts


