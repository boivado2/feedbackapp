import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { feedbackReceived } from './../types';


const FeedbackState = (props) => {

  const initialState = {
    feedbacks:[]
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  // getFeedback

  const getFeedback = async () => {
    try {
      const res = await fetch('./data.json')
      const data = await res.json()
      console.log(data)
      dispatch({ type: feedbackReceived, payload:data.productRequests})
    } catch (ex) {
      console.log(ex)
      
    }
   
  }

  

  return <FeedbackContext.Provider value={{feedbacks: state.feedbacks,getFeedback}}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState