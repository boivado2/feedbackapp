import Home from './components/Home';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';


function App() {

  return (
    <Routes>
      <Route path='/suggestions' element={<Home />} />
      <Route path='/suggestions/newfeed' element={<FeedbackForm />} />
      <Route path='/' element={<Navigate to='/suggestions' replace />}/>
    </Routes>
  )
  
}

export default App;
