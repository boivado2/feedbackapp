/* eslint-disable import/no-anonymous-default-export */
import { GET_FEEDBACKS, GET_FEEDBACK, GET_CATEGORIES, ADD_COMMENT, GET_COMMENT, UPDATE_FEEDBACK, DELETE_FEEDBACK, GET_FEEDBACK_FAILED, CLEAR_ERROR, UPDATE_FEEDBACK_FAILED, DELETE_FEEDBACK_FAILED, UPDATE_UPVOTES, SET_LOADING } from './../types';


export default (state, action) => {
  switch (action.type) {
    case GET_FEEDBACKS:
      return {
        ...state,
        feedbacks: action.payload,
        loading: false
      }
    case GET_FEEDBACK: 
      return {
        ...state,
        feedback: action.payload,
        loading: false
      }
      case GET_FEEDBACK_FAILED:
      return {
        ...state,
        feedback: {},
        error: action.payload,
        loading:false
        }
    case UPDATE_FEEDBACK: 
      return {
        ...state,
        feedbacks: state.feedbacks.filter(feedback => feedback._id === action.payload._id ? action.payload : feedback),
        loading:false

      }
    case UPDATE_UPVOTES:
      return {
        ...state,
        feedbacks: state.feedbacks.filter(feedback => feedback._id === action.payload._id ? action.payload.upvotes : feedback.upvotes)
      }
      case UPDATE_FEEDBACK_FAILED:
        return {
          ...state,
          error: action.payload,
          loading:false

          }
      case DELETE_FEEDBACK: 
      return {
        ...state,
        feedbacks: state.feedbacks.filter(feedback => feedback._id !== action.payload),
        loading:false

      }
      case DELETE_FEEDBACK_FAILED:
        return {
          ...state,
          error: action.payload,
          loading:false

      }
    case GET_CATEGORIES: 
      return {
        ...state,
        categories: action.payload
      }
    case GET_COMMENT: 
      return {
        ...state,
        comments: action.payload,
        loading: false
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        loading:false
      }
      case CLEAR_ERROR: 
      return {
        ...state,
        error: {}
      }
    case "CLEAR_FEEDBACK_STATE": 
      return {
        ...state,
        feedback: {}
      }
      case "CLEAR_COMMENTS_STATE": 
      return {
        ...state,
        comments: []
      }
    case SET_LOADING:
      return {
        ...state,
        loading:true
      }
    default:
      return state;
  }

}