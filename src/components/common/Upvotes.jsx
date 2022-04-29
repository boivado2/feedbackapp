import React, { useContext, useState, useEffect, useCallback } from 'react'
import AuthContext from './../../context/auth/authContext';
import FeedbackContext from './../../context/feeds/feedbackContext';
import arrowupSvg from '../../shared/icon-arrow-up.svg';


function Upvotes({ feedback }) {
  const { user } = useContext(AuthContext)
  const { updateUpvotes } = useContext(FeedbackContext)
  
  useEffect(() => {

  },[])
  return (
    <span className={`p-3 text-sm  bg-custom-color-white-200  cursor-pointer  rounded-xl w-fit hover:bg-custom-color-white-100 hover:brightness-90  ${feedback.status === 'suggestion' ? "sm:order-1 sm:mb-0 inline-block  sm:block" : "inline-block"}`}> <img className={` sm:text-xs    ${feedback.status !== "suggestion" ? 'inline-block mr-3' : " inline-block mr-3 sm:mr-0 sm:block"}`} src={arrowupSvg} alt="" /> {feedback.upvotes ? feedback.upvotes.length : 0}</span>
  )
}

export default Upvotes