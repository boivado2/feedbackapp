import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducer'
import api from './middleware/api'
import error from './middleware/error'

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api, error)
    
  }
}
)