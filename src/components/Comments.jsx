import React, {useEffect, useContext} from 'react'
import arrayToTree from 'array-to-tree'
import Comment from './Comment'
import FeedbackContext from './../context/feeds/feedbackContext';
import Spinner from './common/Spinner';


function Comments({ id }) {
  const { getComments, clearCommentsState, comments, loading } = useContext(FeedbackContext)
  
  console.log(id)
  

  useEffect(() => {
    getComments(id)

    return () => {
      clearCommentsState()
    }
  }, [id])

  const nextedComments =  arrayToTree(comments, {
    parentProperty: 'parentId',
    customID: '_id',
    childrenProperty: 'replies'
  })
  
  if(loading) return <Spinner/>
  return (
    <div className='px-2 py-1  lg:px-6 lg:py-3 bg-white rounded-md sm:flex flex flex-col  justify-start gap-3 lg:gap-6 '>
      <p className='text-xl '>{comments.length} Comment</p>
      {nextedComments.map(comment => (
          <Comment  key={comment._id}  comment={comment} />
      ))}
      </div>
  )
}

export default Comments