/* eslint-disable import/no-anonymous-default-export */
import {  SET_MENU_ITEM, SET_CATEGORY, SET_MOBILE_SIDEBAR } from './../types';


export default (state, action) => {
  switch (action.type) {
        case SET_CATEGORY: 
      return {
        ...state,
        selectedCategory: action.payload
      }
    case SET_MENU_ITEM:
      return {
        ...state,
        menuItem: action.payload
      }
    case SET_MOBILE_SIDEBAR: 
      return {
        ...state,
        mobileSidebar: action.payload
      }
        
    default:
      return state;
  }

}