import { getGeneralError } from '../error';
import { apiCallFailed } from './../api';

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallFailed.type) return next(action)

  next(action)

  dispatch(getGeneralError(action.payload))  
}

export default api