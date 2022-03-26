import React, {useEffect, useContext} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDetail from './components/FeedbackDetail';
import LoginForm from './components/LoginForm';
import './App.css';



function App() {
  return (
    <Routes>
      <Route path='/suggestions' element={<Home />} />
      <Route path='/suggestions/:suggestionId' element={ <FeedbackDetail/>}/>
      <Route path='/suggestions/newfeed' element={<FeedbackForm />} />
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/' element={<Navigate to='/suggestions' replace />}/>
    </Routes>
  )
  
}

export default App;
