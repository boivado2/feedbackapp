import { createSlice, createSelector } from '@reduxjs/toolkit'
import _ from 'lodash'


import { apiCallBegan } from './api'


const initialState = {
  list: [],
  categories: [],
  comments: [],
  feedback : {},
  loading: false,
  error: {},
}

const slice = createSlice({
  initialState,
  name: "FEEDBACK",
  reducers: {
    feedbacksReuested: (state, action) => {
      state.loading = true
    },
    feedbacksRequestFailed: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    feedbacksRecieved: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
    feedbackRecieved: (state, action) => {
      state.feedback = action.payload
      state.loading = false
    },
    feedbackAdded: (state, action) => {
      state.list.push(action.payload)
      state.loading = false

     },
    feedbackUpdated: (state, action) => { 
      const index = state.list.findIndex(f => f._id === action.payload._id)
      state.list[index] = action.payload

    },
    feedbackUpvoted: (state, action) => {
      const index = state.list.findIndex(f => f._id === action.payload._id)
      state.list[index].upvotes = action.payload.upvotes
    },
    feedbackDeleted: (state, action) => {
      const index = state.list.findIndex(f => f._id === action.payload._id)
      delete state.list[index]
    },

    feedbackErrorCleared: (state, action) => {
      state.error =  {}
    },
  }
})

export const { feedbackAdded, feedbacksRecieved, feedbackUpdated, feedbackDeleted, feedbacksReuested, feedbacksRequestFailed, feedbackUpvoted, feedbackRecieved, feedbackErrorCleared } = slice.actions

export default slice.reducer

// action creators

const url = '/suggestions'

export const loadFeedbacks = () => apiCallBegan({
    url,
    onStart: feedbacksReuested.type,
    onSuccess: feedbacksRecieved.type,
})


export const loadFeedback = (id) =>
  apiCallBegan({
    url : url + '/' + id,
    onStart: feedbacksReuested.type,
    onSuccess: feedbackRecieved.type,
    onError: feedbacksRequestFailed.type,
})


export const addFeedback = (data)  =>
  apiCallBegan({
    url,
    onStart: feedbacksReuested.type,
    onSuccess: feedbackAdded.type,
    data: data,
    method: "POST",
    onError: feedbacksRequestFailed.type

  })

export const updateFeedback = (data) => (dispatch) => { 
  const body = { ...data }
  delete body._id
 dispatch(apiCallBegan({
    url: url + "/" + data._id,
    data: body,
    method: "Put",
   onSuccess: feedbackUpdated.type,
   onError: feedbacksRequestFailed.type

 }))
}

export const upvoteFeedback = (id) => (dispatch) => { 
 dispatch(apiCallBegan({
    url: url + "/" + id,
    method: "Patch",
   onSuccess: feedbackUpvoted.type,
   onError: feedbacksRequestFailed.type
 }))
}


export const deleteFeedback = (id) => (dispatch) => { 
 dispatch(apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess : feedbackDeleted.type
 }))
}

export const clearFeedbackError = () => feedbackErrorCleared()


// selectors

export const getFilteredFeedbacks = (items) => createSelector(
  state => state.entities.feedbacks.list,
  state => state.ui.selectedCategory,
  (list, selectedCategory ) => selectedCategory && selectedCategory._id ? items.filter(i => i.category.title === selectedCategory.title) : items
)

export const getsortedFeedbacks = (items) => createSelector(
  state => state.entities.feedbacks.list,
  state => state.ui.menuItem,
  (list, menuItem) => _.orderBy(items, [menuItem.sortPath], [menuItem.sortOrder]) 
)

export const getSingleFeedback = (feedbackId) => createSelector(
  state => state.entities.feedbacks.list,
  (list) => list.find((i) => i._id === feedbackId)
)
