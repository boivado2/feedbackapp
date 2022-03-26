import React, { useReducer } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import AuthContext from './authContext';
import AuthReducer from "./authReducer.js"
import {REGISTER_USER, LOGIN_USER, LOG_OUT, GET_USER} from '../types'



function AuthState(props) {

  const initialState = {
    user: {},
    isAuthenticated: false
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const getUser = async (token) => {
    try {
      const user = await jwtDecode(token)
      dispatch({type:GET_USER, payload: user})
    } catch (error) {}
 
  }
  
// login
  const loginUser = async (user) => {
    try {
      const { data } = await axios.post('http://localhost:1200/api/auth', user)
      dispatch({type:LOGIN_USER, payload: data})
    } catch (ex) {
      console.log(ex.response.data)
    }
 
  }



// logOutUser
  const logOutUser = async () => {
        dispatch({type:LOG_OUT})
  }
  
  return  <AuthContext.Provider value={{
      user: state.user,
      isAuthenticated: state.isAuthenticated,
      loginUser,
      logOutUser,
      getUser
    }} >
      {props.children}
    </AuthContext.Provider>

}

export default AuthState