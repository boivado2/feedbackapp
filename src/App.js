import React, {useEffect, useContext} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDetail from './components/FeedbackDetail';
import LoginForm from './components/LoginForm';
import AuthContext from './context/auth/authContext';
import './App.css';
import RoadMap from './components/RoadMap';
import httpService from './services/httpService'
import RegisterForm from './components/RegisterForm';

if (localStorage.token) {
  httpService.setAuthToken(localStorage.token)
}



function App() {
  const { getUser } = useContext(AuthContext)
  useEffect(() => {
    const token = localStorage.getItem('token')
    getUser(token)
  }, [])
  
  return (
    <Routes>
      <Route path='/suggestions' element={<Home />} />
      <Route path='/suggestions/:id' element={<FeedbackDetail />} />
      <Route path='/roadmap' element={<RoadMap/>}/>

      <Route path='/feedback/:id' element={<FeedbackForm />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm/>}/>

      <Route path='/' element={<Navigate to='/suggestions' replace />}/>
    </Routes>
  )
  
}

export default App;
