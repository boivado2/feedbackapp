import React from 'react'
import FeedPost from './FeedPost'
import NoFeedback from './NoFeedback';
import Spinner from './common/Spinner'
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredFeedbacks, getsortedFeedbacks, upvoteFeedback } from './../app/feedback';
import getFeedbackByStatus from './utils/getFeedbackByStatus';


function FeedPosts() {
 const dispatch =  useDispatch()
  const feedbacks = useSelector(state => state.entities.feedbacks.list)
  const suggestionFeedbacks  = getFeedbackByStatus(feedbacks, 'suggestion')
  const filtered = useSelector(getFilteredFeedbacks(suggestionFeedbacks))
  const sorted = useSelector(getsortedFeedbacks(filtered))
  const loading = useSelector(state => state.entities.feedbacks.loading)

  const handleUpvote = (id) => {
    dispatch(upvoteFeedback(id))
  }
  
  return (
    <div className='p-3 flex flex-col gap-2 h-auto sm:p-0 justify-center items-center'>
      {loading ?
        <Spinner />
        :
        sorted.length === 0 || suggestionFeedbacks.length === 0 ? <NoFeedback suggestionFeedbackLength={suggestionFeedbacks.length} /> : sorted.map(feedback => <FeedPost key={feedback._id} feedback={feedback} handleUpvote={handleUpvote} />)
      }
    </div>
  )
}

export default FeedPosts


