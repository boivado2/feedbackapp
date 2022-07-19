import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  msg: "",
  loading: false
}

const slice = createSlice({
  initialState,
  name: "Errors",
  reducers: {
    errorRecieved: (state, action) => {
      state.msg = action.payload
    },
    generalErrorCleared: (state, action) => {
      state.msg =  ""
    },
  }
})

export const {  errorRecieved, generalErrorCleared } = slice.actions

export default slice.reducer

// action creators


export const getGeneralError = (error) => errorRecieved(error)
export const clearGeneralError = () => generalErrorCleared()





// selectors


