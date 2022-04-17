import { useReducer } from "react"
import AppReducer from "./app.Reducer"
import AppContext from './appContext';
import {  SET_MENU_ITEM,  SET_CATEGORY,  SET_MOBILE_SIDEBAR} from './../types';


const AppState = (props) => {

  const initialState = {
    menuItem: { title: "Most Upvotes", id: 1, sortPath: 'upvotes', sortOrder: "desc" },
    selectedCategory: { title: "All", _id: "" },
    mobileSidebar: false
  }

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const setCategory = (category) => {
    dispatch({type:SET_CATEGORY, payload:category})
  }

  const setMenuItem = (menuItem) => {
    dispatch({type:SET_MENU_ITEM, payload: menuItem})
  }

  const setMobileSidebar = (sidebar) => {
    dispatch({type:SET_MOBILE_SIDEBAR, payload: sidebar})
  }



  

  return <AppContext.Provider
    value={{
      menuItem: state.menuItem,
      selectedCategory: state.selectedCategory,
      mobileSidebar: state.mobileSidebar,
      setMenuItem,
      setCategory,
      setMobileSidebar
  }}>
    {props.children}
  </AppContext.Provider>
}


export default AppState