import { useReducer } from "react"
import FeedbackReducer from "./feedbackReducer"
import FeedbackContext from './feedbackContext';
import { GET_FEEDBACKS, GET_FEEDBACK, SET_MENU_ITEM, GET_CATEGORIES, SET_CATEGORY, ADD_COMMENT, GET_COMMENT } from './../types';
import http from '../../services/httpService'


const FeedbackState = (props) => {

  const initialState = {
    feedbacks: [],
    categories: [],
    comments: [],
    feedback: null,
    menuItem: { title: "Most Upvotes", id: 1, sortPath: 'upvotes', sortOrder: "desc" },
    selectedCategory: {title: "All", _id: ""}
  }

  const [state, dispatch] = useReducer(FeedbackReducer, initialState)

  // get feedbacks
  const getFeedbacks = async () => {
    try {
      const {data} = await http.get('http://localhost:1200/api/suggestions')
      dispatch({ type: GET_FEEDBACKS, payload:data})
    } catch (ex) {
      console.log(ex)
      
    }
   
  }

  // get feedback
  const getFeedback = async (suggestionId) => {
    try {
      const {data} = await http.get(`http://localhost:1200/api/suggestions/${suggestionId}`)
      dispatch({ type: GET_FEEDBACK, payload: data })
    } catch (ex) {
      console.log(ex.response)
    }
   
  }

  // add feedback
  const addFeedback = async (feedback) => {
    try {
      await http.post('http://localhost:1200/api/suggestions', feedback)
      // console.log(data)
    //  dispatch({type: ADD_FEEDBACK, payload:data})
    } catch (ex) {
      console.log(ex)
    }

  }

  // update feedback
  const updateFeedback = async (feedback) => {
    const body = { ...feedback }
    delete body._id
    console.log(body)
    try {
    const {data} =   await http.put('http://localhost:1200/api/suggestions/'+ feedback._id, body)
      console.log(data)
    //  dispatch({type: ADD_FEEDBACK, payload:data})
    } catch (ex) {
      console.log(ex.response)
    }

  }


  // get Categories
  const getCategories = async () => {
    try {
      const { data } = await http.get('http://localhost:1200/api/categories')
      // console.log(data)
      dispatch({type:GET_CATEGORIES, payload: data})
    } catch (ex) {
      console.log(ex)
    }
  
  }

    // add comment associated with a give feedback
    const addComment= async (comment, id) => {
      try {
      const {data} =   await http.post(`http://localhost:1200/api/suggestions/comments/${id}`, comment)
       dispatch({type: ADD_COMMENT, payload:data})
      } catch (ex) {
        console.log(ex.response)
      }
  
  }
  
      // get all comment associated with a given feedback
      const getComments = async (id) => {
        try {
        const {data} =   await http.get(`http://localhost:1200/api/suggestions/comments/${id}`)
          dispatch({ type: GET_COMMENT, payload: data })
        } catch (ex) {
          console.log(ex)
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
      updateFeedback,
      addComment,
      getCategories,
      getComments,
      setCategory,
  }}>
    {props.children}
  </FeedbackContext.Provider>
}


export default FeedbackState