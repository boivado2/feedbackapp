import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode';


import { apiCallBegan } from './api'


const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
}

const slice = createSlice({
  initialState,
  name: "Auth",
  reducers: {
    authRequested: (state, action) => {
      state.loading = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
      state.loading = false
    },

    userLoaded: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
    userLogin: (state, action) => {
      localStorage.setItem('token', action.payload)
      state.isAuthenticated = true
      state.loading = false
    },
    userRegistered: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload
      state.loading = false
    },
    userLogOut: (state, action) => {
      console.log('logout')
      localStorage.removeItem('token')
      state.isAuthenticated = false
      state.user = null
    },

    authErrorCleared: (state, action) => {
      state.error = null
    }
  }
})

export const {  userLoaded, userLogin, userRegistered, userLogOut, authRequested, authRequestFailed, authErrorCleared } = slice.actions

export default slice.reducer

// action creators

const loginEndpoint = '/auth'
const registerEndpoint = '/users'

export const loadUser = (token) => async (dispatch) => {
  try {
    const user = await jwtDecode(token)
    dispatch(userLoaded(user))
  } catch (error) {}
  
}


export const loginUser = (data) =>
  apiCallBegan({
    url: loginEndpoint,
    method: "Post",
    data : data,
    onStart: authRequested.type,
    onSuccess: userLogin.type,
    onError: authRequestFailed.type,
  })


  export const registerUser = (data) =>
  apiCallBegan({
    url: registerEndpoint,
    method: "Post",
    data : data,
    onStart: authRequested.type,
    onSuccess: userRegistered.type,
    onError: authRequestFailed.type,
})

export const logOutUser = () => userLogOut()
export const clearAuthError = () => authErrorCleared()


// selectors


