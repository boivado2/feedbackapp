import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { GET_FEEDBACKS, GET_FEEDBACK, SET_MENU_ITEM, GET_CATEGORIES, SET_CATEGORY, ADD_COMMENT, GET_COMMENT, GET_REPLIES, ADD_REPLY } from './../types';
import axios from 'axios'


const FeedbackState = (props) => {

  const initialState = {
    feedbacks: [],
    categories: [],
    comments: [],
    replies: [],
    feedback: null,
    menuItem: { title: "Most Upvotes", id: 1, sortPath: 'upvotes', sortOrder: "desc" },
    selectedCategory: {title: "All", _id: ""}
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  // get feedbacks
  const getFeedbacks = async () => {
    try {
      const res = await fetch('http://localhost:1200/api/suggestions')
      const data = await res.json()
      dispatch({ type: GET_FEEDBACKS, payload:data})
    } catch (ex) {
      console.log(ex)
      
    }
   
  }

  // get feedback
  const getFeedback = async (suggestionId) => {
    try {
      const {data} = await axios.get(`http://localhost:1200/api/suggestions/${suggestionId}`)
      dispatch({ type: GET_FEEDBACK, payload: data })
    } catch (ex) {
      console.log(ex)
    }
   
  }

  // add feedback
  const addFeedback = async (feedback) => {
    try {
      await axios.post('http://localhost:1200/api/suggestions', feedback)
      // console.log(data)
    //  dispatch({type: ADD_FEEDBACK, payload:data})
    } catch (ex) {
      console.log(ex)
    }

  }


  // get Categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get('http://localhost:1200/api/categories')
      // console.log(data)
      dispatch({type:GET_CATEGORIES, payload: data})
    } catch (ex) {
      console.log(ex)
    }
  
  }

    // add comment associated with a give feedback
    const addComment= async (comment, id) => {
      try {
      const {data} =   await axios.post(`http://localhost:1200/api/suggestions/comments/${id}`, comment)
       dispatch({type: ADD_COMMENT, payload:data})
      } catch (ex) {
        console.log(ex.response)
      }
  
  }
  
      // get all comment associated with a given feedback
      const getComments = async (id) => {
        try {
        const {data} =   await axios.get(`http://localhost:1200/api/suggestions/comments/${id}`)
          dispatch({ type: GET_COMMENT, payload: data })
        } catch (ex) {
          console.log(ex)
        }
    
  }
    // get all replies associated with a given comment
    const getReplies = async (replyId) => {
      try {
        const { data } = await axios.get(`http://localhost:1200/api/suggestions/replies/${replyId}`)
        dispatch({ type: GET_REPLIES, payload: data })
        console.log(data)
      } catch (ex) {
        console.log(ex)
      }
  
    }

  // Post a reply
  const addReply = async (reply, replyId) => {
    try {
      const {data} =   await axios.post(`http://localhost:1200/api/suggestions/replies/${replyId}`, reply)
      dispatch({type: ADD_REPLY, payload:data})
    } catch (ex) {
      console.log(ex.response)
      
    }
  }

  const setCategory = (category) => {
    dispatch({type:SET_CATEGORY, payload:category})
  }

  const setMenuItem = (menuItem) => {
    dispatch({type:SET_MENU_ITEM, payload: menuItem})
  }


  

  return <FeedbackContext.Provider
    value={{
    feedbacks: state.feedbacks,
    feedback: state.feedback,
    categories: state.categories,
    comments: state.comments,
    selectedCategory: state.selectedCategory,
    menuItem: state.menuItem,
    setMenuItem,
    getFeedbacks,
    getFeedback,
    addFeedback,
    addComment,
    addReply,
    getReplies,
    getCategories,
    getComments,
    setCategory,
  }}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState