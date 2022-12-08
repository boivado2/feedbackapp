import { createSlice } from '@reduxjs/toolkit'


import { apiCallBegan } from './api'


const initialState = {
  list: [],
  loading: false
}

const slice = createSlice({
  initialState,
  name: "Comments",
  reducers: {
    commentsReuested: (state, action) => {
      state.loading = true
    },
    commentsRequestFailed: (state, action) => {
      state.loading = false
    },
    commentsRecieved: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
    commentAdded: (state, action) => {
      state.list.push(action.payload)
    },
  }
})

export const {  commentsRecieved,  commentsReuested, commentsRequestFailed, commentAdded } = slice.actions

export default slice.reducer

// action creators

const url = '/suggestions'

export const loadcomments = (id) => (dispatch) => {
  dispatch(
    apiCallBegan({
      url : `${url}/${id}/comments`,
      onStart: commentsReuested.type,
      onSuccess: commentsRecieved.type,
      onError: commentsRequestFailed.type,
  })
  )

}


export const addComment = (data, id) => (dispatch) => 
   dispatch(
    apiCallBegan({
      url : `${url}/${id}/comments`,
      onSuccess: commentAdded.type,
      data,
      method: "POST",
      onError: commentsRequestFailed.type
  
    })
  )
  




// selectors


