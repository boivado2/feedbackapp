/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

axios.interceptors.response.use(null, error => {
  const expectdError = error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectdError) {
    console.log("error", error)
    alert("upexpected error")
  }

 return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}