import React from 'react'
import { NavLink } from 'react-router-dom'
import commentSvg from '../shared/icon-comments.svg';
import arrowupSvg from '../shared/icon-arrow-up.svg';


function FeedPost({ feedback, onClick }) {

  const [hasVoted, setHasVoted] = React.useState(false)

  return (

    <div className={` px-3 py-1 bg-white rounded-md relative  w-full ${feedback.status !== 'suggestion' ? 'border-t-4 ' : "sm:flex sm:justify-center sm:items-center sm:gap-6 "}  ${feedback.status === 'planned' ? 'border-custom-color-11' : "border-custom-color-10" && feedback.status === 'in-progress' ? " border-f-purple" : " border-custom-color-10"}`}>

      <div className={`flex flex-col  gap-1 p-1 mb-20 flex-3 ${feedback.status === 'suggestion' ? "sm:order-2 sm:mb-0": ""}`}> 
        <div className='flex items-center'>
          {feedback.status !== 'suggestion' ?
            <div>
              <span className={
              ` h-3 w-3 rounded-full mr-1
              ${feedback.status === "planned" ? 'bg-custom-color-11' : "bg-custom-color-10" &&
              feedback.status === 'live' ? " bg-custom-color-10": " bg-f-purple"}`}></span>
          <span className='text-xs'>{feedback.status }</span>
             </div>
            :

            null
          }
        </div>
       
        <NavLink to={`/suggestions/${feedback._id}`} className='text-lg cursor-pointer text-f-dark-blue-300 w-fit sm:text-xl'>{feedback.title}</NavLink>
        <p className='text-xs my-2  sm:text-base  text-f-dark-blue'> {feedback.description}</p>
        <span className='p-2 text-sm sm:text-base bg-light-white  rounded-lg w-fit h-fit text-f-light-blue'>{feedback.category.title}</span>
      </div>

      <span onClick={() => {
        setHasVoted(true)
        onClick(feedback._id, hasVoted)
      }
      } className={`p-3 text-sm bg-light-white cursor-pointer inline-block absolute left-4 bottom-4 rounded-xl w-fit  ${feedback.status === 'suggestion' ? "sm:order-1 sm:mb-0 sm:static" : ""}`}> <img src={arrowupSvg} alt="" /> {feedback.upvotes.length}</span>
 
        <span className={`p-3 text-sm inline-flex absolute right-4 bottom-4 rounded-xl w-fit ${feedback.status === 'suggestion' ? "sm:order-3 sm:mb-0 sm:static": ""}`}> <img className='pr-3 ' src={commentSvg} alt="" /> {feedback.commentsLength}</span>
    </div>

  )
}

export default FeedPost