import { combineReducers } from '@reduxjs/toolkit'
import categoriesReducer from './categories'
import feedbackReducer from './feedback'


export default combineReducers({
  feedbacks: feedbackReducer,
  categories:  categoriesReducer
})