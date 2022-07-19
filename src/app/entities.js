import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth'
import categoriesReducer from './categories'
import commentsReducer from './comments'
import errorReducer from './error'
import feedbackReducer from './feedback'


export default combineReducers({
  feedbacks: feedbackReducer,
  categories: categoriesReducer,
  comments: commentsReducer,
  error: errorReducer,
  auth: authReducer,
})