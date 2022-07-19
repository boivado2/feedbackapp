/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDetail from './components/FeedbackDetail';
import LoginForm from './components/LoginForm';
import AuthContext from './context/auth/authContext';
import RoadMap from './components/RoadMap';
import httpService from './services/httpService'
import RegisterForm from './components/RegisterForm';
import ProtectedRoute from './components/common/ProtectedRoute';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { clearGeneralError } from './app/error';
import { loadUser } from './app/auth';




if (localStorage.token) {
  httpService.setAuthToken(localStorage.token)
}


function App() {
  const dispatch = useDispatch()
  const error = useSelector(state => state.entities.error.msg)
  const navigate = useNavigate()
  const { getUser, user } = useContext(AuthContext)
  useEffect(() => {
    if (error === "Access denied, no token provided" || error === "invalid token" ) {
      toast.error("Please login to perfom such action")
      setTimeout(() => {
        navigate('/login')
        dispatch(clearGeneralError())
      }, 3000)
    }
    const token = localStorage.getItem('token')
    dispatch(loadUser(token))
    getUser(token)
  }, [error])
  
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/suggestions/:id' element={
          <ProtectedRoute user={user}>
            <FeedbackForm />
          </ProtectedRoute>}
        />
        <Route path='/feedback/:id' element={<FeedbackDetail />} />
        <Route path='/roadmap' element={<RoadMap/>}/>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm/>}/>

        <Route path="*" element={<p>Notfound 404</p>} />
      </Routes>
      </>

  )
  
}

export default App;
