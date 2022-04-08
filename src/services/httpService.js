/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token 
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
  }
axios.interceptors.response.use(null, error => {
  const expectdError = error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectdError) {
    console.log("error", error)
  }

 return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthToken
}