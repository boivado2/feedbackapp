import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { GET_FEEDBACKS, GET_FEEDBACK,GET_CATEGORIES,ADD_COMMENT, GET_COMMENT, DELETE_FEEDBACK, UPDATE_FEEDBACK, GET_FEEDBACK_FAILED, CLEAR_ERROR, UPDATE_FEEDBACK_FAILED, DELETE_FEEDBACK_FAILED, UPDATE_UPVOTES, UPDATE_UPVOTES_FAILED, SET_LOADING } from './../types';
import http from '../../services/httpService'


const FeedbackState = (props) => {

  const initialState = {
    feedbacks: [],
    categories: [],
    comments: [],
    feedback: {},
    loading: true,
    error: {}
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  const endPoint = "/suggestions"

  // get feedbacks
  const getFeedbacks = async () => {
    try {
      const { data } = await http.get(endPoint)
      dispatch({ type: GET_FEEDBACKS, payload: data })
    } catch (ex) { }
   
  }

  // get feedback
  const getFeedback = async (suggestionId) => {
    try {
      setLoading()
      const { data } = await http.get(`${endPoint}/${suggestionId}`)
      dispatch({ type: GET_FEEDBACK, payload: data })
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        dispatch({ type: GET_FEEDBACK_FAILED, payload: ex.response.data })
      }
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
      const { data } = await http.put(endPoint + '/' + feedback._id, body)
      dispatch({ type: UPDATE_FEEDBACK, payload: data })
    } catch (ex) {
      dispatch({ type: UPDATE_FEEDBACK_FAILED, payload: ex.response.data })
    }

  }


  const updateUpvotes = async (id) => {
    try {
      const { data } = await http.patch(endPoint + '/' + id)
      console.log(data)
      //  dispatch({type: UPDATE_UPVOTES, payload:data})
    } catch (ex) {
      dispatch({ type: UPDATE_UPVOTES_FAILED, payload: ex.response.data })
    }

  }


  // delete feedback
  const deleteFeedback = async (id) => {
    try {
      await http.delete(endPoint + '/' + id)
      dispatch({ type: DELETE_FEEDBACK, payload: id })
    } catch (ex) {
      dispatch({ type: DELETE_FEEDBACK_FAILED, payload: ex.response.data })
    }

  }



  // get Categories
  const getCategories = async () => {
    try {
      const { data } = await http.get('/categories')
      // console.log(data)
      dispatch({ type: GET_CATEGORIES, payload: data })
    } catch (ex) {
      console.log(ex)
    }
  
  }

  // add comment associated with a given feedback
  const addComment = async (comment, id) => {
    try {
      const { data } = await http.post(`${endPoint}/${id}/comments`, comment)
      dispatch({ type: ADD_COMMENT, payload: data })
    } catch (ex) {
      console.log(ex.response)
    }
  
  }
  
  // get all comment associated with a given feedback
  const getComments = async (id) => {
    try {
      const { data } = await http.get(`${endPoint}/${id}/comments`)

      dispatch({ type: GET_COMMENT, payload: data })
          
    } catch (ex) { }
    
  }

  const clearError = () => {
    setTimeout(() => dispatch({ type: CLEAR_ERROR }), 1000)
  }


  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  const clearFeedbackState = () => { dispatch({ type: "CLEAR_FEEDBACK_STATE" }) }
  const  clearCommentsState = () => { dispatch({type: "CLEAR_COMMENTS_STATE"})}

  

  return <FeedbackContext.Provider
    value={{
      feedbacks: state.feedbacks,
      feedback: state.feedback,
      categories: state.categories,
      comments: state.comments,
      loading: state.loading,
      error: state.error,
      getFeedbacks,
      getFeedback,
      addFeedback,
      updateFeedback,
      updateUpvotes,
      deleteFeedback,
      addComment,
      getCategories,
      getComments,
      clearError,
      setLoading,
      clearFeedbackState,
      clearCommentsState
  }}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState