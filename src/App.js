import React, {useEffect, useContext} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDetail from './components/FeedbackDetail';
import LoginForm from './components/LoginForm';
import AuthContext from './context/auth/authContext';
import './App.css';
import RoadMap from './components/RoadMap';
import httpService from './services/httpService'
import RegisterForm from './components/RegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/common/ProtectedRoute';


if (localStorage.token) {
  httpService.setAuthToken(localStorage.token)
}


function App() {
  const { getUser, user } = useContext(AuthContext)
  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token)
  }, [])
  
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/suggestions' element={<Home />} />
        <Route path='/suggestions/:id' element={
          <ProtectedRoute user={user}>
            <FeedbackForm />
          </ProtectedRoute>}
        />
        <Route path='/feedback/:id' element={<FeedbackDetail />} />
        <Route path='/roadmap' element={<RoadMap/>}/>

    
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm/>}/>

        <Route path='/' element={<Navigate to='/suggestions' replace />}/>
        <Route path="*" element={<p>Notfound 404</p>} />
      </Routes>
      </>

  )
  
}

export default App;
