import React from 'react'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';
import Spinner from './common/Spinner'


function FeedPosts({sortedSuggestion, loading, getSuggestionFeedback}) {
  const suggestionFeedbackLength = getSuggestionFeedback.length
  const sortedLength = sortedSuggestion.length
  
  return (
    <div className='p-3 flex flex-col gap-2 h-auto sm:p-0 justify-center items-center'>
      {loading ?
        <Spinner />
        :
        sortedLength === 0 || suggestionFeedbackLength === 0 ? <NoFeedback suggestionFeedbackLength={suggestionFeedbackLength} /> : sortedSuggestion.map(feedback => <FeedPost key={feedback._id} feedback={feedback} />)
      }
    </div>
  )
}

export default FeedPosts


