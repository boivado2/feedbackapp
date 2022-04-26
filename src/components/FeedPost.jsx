import React from 'react'
import { NavLink } from 'react-router-dom'
import commentSvg from '../shared/icon-comments.svg';
import arrowupSvg from '../shared/icon-arrow-up.svg';


function FeedPost({ feedback}) {

  return (

    <div className={` px-3 py-3 bg-white rounded-md relative  w-full ${feedback.status !== 'suggestion' ? 'border-t-4 sm:h-fit ' : "sm:flex sm:justify-center sm:items-center sm:gap-6 "}  ${feedback.status === 'planned' ? 'border-custom-color-red-100' : "border-custom-color-cyan" && feedback.status === 'in-progress' ? " border-custom-color-purple" : " border-custom-color-cyan"}`}>

      <div className={`flex flex-col mb-5 gap-1 p-1  flex-3 ${feedback.status === 'suggestion' ? "sm:order-2 sm:mb-0": ""}`}> 
        <div className='flex items-center'>
          {feedback.status !== 'suggestion' ?
            <div>
              <span className={
              ` rounded-full w-2 h-2 inline-block mr-1
              ${feedback.status === "planned" ? 'bg-custom-color-red-100' : "bg-custom-color-cyan" &&
              feedback.status === 'live' ? " bg-custom-color-cyan": " bg-custom-color-purple"}`}></span>
          <span className='text-xs'>{feedback.status }</span>
             </div>
            :

            null
          }
        </div>
       
        <NavLink to={`/feedback/${feedback._id}`} className='text-lg cursor-pointer text-custom-color-blue-300 w-fit sm:text-xl'>{feedback.title}</NavLink>
        <p className='text-xs my-2  sm:text-base  text-custom-color-blue-200'> {feedback.description}</p>
        <span className='py-1 px-2 text-sm sm:text-base bg-custom-color-white-200  rounded-lg w-fit text-custom-color-blue-100 '>{feedback.category ? feedback.category.title : ""}</span>
      </div>

      <span className={`p-3 text-sm  bg-custom-color-white-100 cursor-pointer  rounded-xl w-fit hover:bg-custom-color-white-100 hover:brightness-90  ${feedback.status === 'suggestion' ? "sm:order-1 sm:mb-0 inline-block  sm:block" : "inline-block"}`}> <img className={` sm:text-xs   ${feedback.status !== "suggestion" ? 'inline-block mr-3' : " inline-block mr-3 sm:mr-0 sm:block"}`} src={arrowupSvg} alt="" /> {feedback.upvotes ? feedback.upvotes.length : 0}</span>
 
        <span className={`p-3 absolute right-0 text-sm inline-flex  rounded-xl w-fit ${feedback.status === 'suggestion' ? "sm:order-3 sm:mb-0": ""}`}> <img className='pr-3 ' src={commentSvg} alt="" /> {feedback.commentsLength}</span>
    </div>

  )
}

export default React.memo(FeedPost)