import React, { useReducer } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import AuthContext from './authContext';
import AuthReducer from "./authReducer.js"
import {LOGIN_USER, LOG_OUT, GET_USER, LOGIN_FAIL, CLEAR_ERROR} from '../types'



function AuthState(props) {

  const initialState = {
    user: {},
    isAuthenticated: false,
    error: {}
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const getUser = async (token) => {
    try {
      const user = await jwtDecode(token)
      dispatch({ type: GET_USER, payload: user })
      console.log(user)
    } catch (error) {}
 
  }
  
// login
  const loginUser = async (user) => {
    try {
      const { data } = await axios.post('http://localhost:1200/api/auth', user)
      dispatch({type:LOGIN_USER, payload: data})
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        dispatch({type: LOGIN_FAIL, payload: ex.response.data})
      }
     
    }
 
  }

 const clearError = () => {
    setTimeout(() => dispatch({type: CLEAR_ERROR}), 100)
  }



// logOutUser
  const logOutUser = async () => {
        dispatch({type:LOG_OUT})
  }


  
  return  <AuthContext.Provider value={{
      user: state.user,
    isAuthenticated: state.isAuthenticated,
      error: state.error,
      loginUser,
      logOutUser,
    getUser,
    clearError
    }} >
      {props.children}
    </AuthContext.Provider>

}

export default AuthState