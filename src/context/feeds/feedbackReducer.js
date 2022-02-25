/* eslint-disable import/no-anonymous-default-export */
import { feedbackReceived } from './../types';


export default (state, action) => {
  switch (action.type) {
    case feedbackReceived:
      return {
        ...state,
        feedbacks: action.payload
      }
        
    default:
      return state;
  }

}