import { createSlice } from '@reduxjs/toolkit'


import { apiCallBegan } from './api'


const initialState = {
  list: [],
  loading: false
}

const slice = createSlice({
  initialState,
  name: "CATEGORIES",
  reducers: {
    categoriesReuested: (state, action) => {
      state.loading = true
    },
    categoriesRequestFailed: (state, action) => {
      state.loading = false
    },
    categoriesRecieved: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
  }
})

export const {  categoriesRecieved,  categoriesReuested, categoriesRequestFailed } = slice.actions

export default slice.reducer

// action creators

const url = '/categories'

export const loadcategories = () =>
  apiCallBegan({
    url,
    onStart: categoriesReuested.type,
    onSuccess: categoriesRecieved.type,
    onError: categoriesRequestFailed.type,
})



// selectors


