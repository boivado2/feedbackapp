/* eslint-disable import/no-anonymous-default-export */
import { GET_FEEDBACKS, GET_FEEDBACK, SET_MENU_ITEM, GET_CATEGORIES, SET_CATEGORY, ADD_COMMENT, GET_COMMENT } from './../types';


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
    case GET_CATEGORIES: 
      return {
        ...state,
        categories: action.payload
      }
    case SET_CATEGORY: 
      return {
        ...state,
        selectedCategory: action.payload
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
    case SET_MENU_ITEM:
      return {
        ...state,
        menuItem: action.payload
      }
        
    default:
      return state;
  }

}