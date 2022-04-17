/* eslint-disable import/no-anonymous-default-export */
import { GET_FEEDBACKS, GET_FEEDBACK, GET_CATEGORIES, ADD_COMMENT, GET_COMMENT, UPDATE_FEEDBACK, DELETE_FEEDBACK } from './../types';


export default (state, action) => {
  switch (action.type) {
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload
      }
    case GET_FEEDBACK: 
      return {
        ...state,
        feedback: action.payload
      }
    case UPDATE_FEEDBACK: 
      return {
        ...state,
        feedbacks : state.feedbacks.filter(feedback => feedback._id === action.payload._id ? action.payload : feedback)
      }
      case DELETE_FEEDBACK: 
      return {
        ...state,
        feedbacks : state.feedbacks.filter(feedback => feedback._id !== action.payload)
      }
    case GET_CATEGORIES: 
      return {
        ...state,
        categories: action.payload
      }
    case GET_COMMENT: 
      return {
        ...state,
        comments: action.payload
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }

        
    default:
      return state;
  }

}