/* eslint-disable import/no-anonymous-default-export */

import { GET_USER, LOGIN_USER, LOG_OUT } from "../types";



export default function (state, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case LOGIN_USER:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuthenticated: true
      } 
    case LOG_OUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state
  }
  
}