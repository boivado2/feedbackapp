/* eslint-disable import/no-anonymous-default-export */

import { CLEAR_ERROR, REGISTER_USER, GET_USER, LOGIN_FAIL, REGISTER_FAIL, LOGIN_USER, LOG_OUT } from "../types";



export default function (state, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    case REGISTER_USER:
      return {
        ...state,
        isAuthenticated:true
    }
    case LOGIN_USER:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuthenticated: true
      } 
    case REGISTER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error:action.payload
      }
    case LOGIN_FAIL: 
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      }
    case CLEAR_ERROR: 
      return {
        ...state,
        error: {}
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