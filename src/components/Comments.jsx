/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import arrayToTree from 'array-to-tree'
import Comment from './Comment'
import Spinner from './common/Spinner';
import { useSelector } from 'react-redux';


function Comments() {
  const comments = useSelector(state => state.entities.comments.list)
  const loading = useSelector(state => state.entities.comments.loading)


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