/* eslint-disable import/no-anonymous-default-export */
import { feedbackReceived, SET_MENU_ITEM } from './../types';


export default (state, action) => {
  switch (action.type) {
    case feedbackReceived:
      return {
        ...state,
        feedbacks: action.payload
      }
    case SET_MENU_ITEM:
      return {
        ...state,
        menuItem: action.payload
      }
        
    default:
      return state;
  }

}