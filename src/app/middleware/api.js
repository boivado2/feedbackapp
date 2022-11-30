import http from '../../services/httpService'
import {apiCallBegan, apiCallSuccess} from '../api'
import { userRegistered } from '../auth';
import { apiCallFailed } from './../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action)
  


  const { onSuccess, onError, data, url, method, onStart } = action.payload

  if(onStart) dispatch({type: onStart})
  
  next(action)


  try {
   
    const response = await http.request({
      url: url,
      data: data,
      method: method,
    })

  
    dispatch(apiCallSuccess(response.data))

    if (onSuccess) dispatch({ type: onSuccess, payload: response.data })



    if (onSuccess === userRegistered.type) {
      localStorage.setItem("token", response.headers['x-auth-token'])
    }

  
  } catch (error) {
    dispatch(apiCallFailed(error.response.data))
   if(onError) dispatch({ type: onError, payload: error.response.data })
    

 }
  
  
}

export default api