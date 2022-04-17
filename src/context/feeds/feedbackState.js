import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { GET_FEEDBACKS, GET_FEEDBACK,GET_CATEGORIES,ADD_COMMENT, GET_COMMENT, DELETE_FEEDBACK, UPDATE_FEEDBACK } from './../types';
import http from '../../services/httpService'


const FeedbackState = (props) => {

  const initialState = {
    feedbacks: [],
    categories: [],
    comments: [],
    feedback: null,
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  const endPoint = "/suggestions"

  // get feedbacks
  const getFeedbacks = async () => {
    try {
      const {data} = await http.get(endPoint)
      dispatch({ type: GET_FEEDBACKS, payload:data})
    } catch (ex) {
      console.log(ex)
      
    }
   
  }

  // get feedback
  const getFeedback = async (suggestionId) => {
    try {
      const { data } = await http.get(`${endPoint}/${suggestionId}`)
     
      dispatch({ type: GET_FEEDBACK, payload: data })
    } catch (ex) {
      console.log(ex.response)
    }
   
  }

  // add feedback
  const addFeedback = async (feedback) => {
    try {
     await http.post(endPoint, feedback)
    } catch (ex) {
      console.log(ex)
    }

  }

  // update feedback
  const updateFeedback = async (feedback) => {
    const body = { ...feedback }
    delete body._id
    try {
    const {data} =   await http.put(endPoint + '/' + feedback._id, body)
     dispatch({type: UPDATE_FEEDBACK, payload:data})
    } catch (ex) {
      console.log(ex.response)
    }

  }


  // delete feedback
  const deleteFeedback = async (id) => {
    try {
     await http.delete(endPoint+ '/' + id)
     dispatch({type: DELETE_FEEDBACK, payload:id})
    } catch (ex) {
      console.log(ex.response)
    }

  }



  // get Categories
  const getCategories = async () => {
    try {
      const { data } = await http.get('/categories')
      // console.log(data)
      dispatch({type:GET_CATEGORIES, payload: data})
    } catch (ex) {
      console.log(ex)
    }
  
  }

    // add comment associated with a given feedback
  const addComment = async (comment, id) => {
      console.log(id)
      try {
      const {data} =   await http.post(`${endPoint}/${id}/comments`, comment)
       dispatch({type: ADD_COMMENT, payload:data})
      } catch (ex) {
        console.log(ex.response)
       }
  
  }
  
      // get all comment associated with a given feedback
      const getComments = async (id) => {
        try {
          const { data } = await http.get(`${endPoint}/${id}/comments`)

          dispatch({ type: GET_COMMENT, payload: data })
          
        } catch (ex) {}
    
  }


  

  return <FeedbackContext.Provider
    value={{
      feedbacks: state.feedbacks,
      feedback: state.feedback,
      categories: state.categories,
      comments: state.comments,
      getFeedbacks,
      getFeedback,
      addFeedback,
      updateFeedback,
      deleteFeedback,
      addComment,
      getCategories,
      getComments,
  }}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState