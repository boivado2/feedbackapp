import Home from './components/Home';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {

  return (
    <Routes>
      <Route path='/suggestions' element={<Home />} />
      <Route path='/' element={<Navigate to='/suggestions' replace />}/>
    </Routes>
  )
  
}

export default App;
