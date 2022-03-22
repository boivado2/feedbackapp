import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { feedbackReceived, SET_MENU_ITEM } from './../types';


const FeedbackState = (props) => {

  const initialState = {
    feedbacks: [],
    menuItem: { title: "Most Upvotes", id: 1, sortPath: 'upvotes', sortOrder: "desc" },
    categories: []
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  // getFeedback

  const getFeedback = async () => {
    try {
      const res = await fetch('http://localhost:1200/api/suggestions')
      const data = await res.json()
      console.log(data)
      dispatch({ type: feedbackReceived, payload:data})
    } catch (ex) {
      console.log(ex)
      
    }
   
  }


  const setMenuItem = (menuItem) => {
    dispatch({type:SET_MENU_ITEM, payload: menuItem})
  }

  

  return <FeedbackContext.Provider value={{feedbacks: state.feedbacks, menuItem: state.menuItem , setMenuItem,  getFeedback}}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState