import React from 'react'
import FeedPost from './FeedPost'

function FeedPosts() {
  return (
    <div className='p-3 flex flex-col gap-2 sm:p-0'>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />

    </div>
  )
}

export default FeedPosts