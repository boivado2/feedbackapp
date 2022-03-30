/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from './../context/auth/authContext';

function LoginForm() {

  const { loginUser, isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated) {
      window.location = '/'
    }
  },[isAuthenticated])
  const [user, setUser] = useState({
    username: '',
    password: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(user)
    
  }

  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const {username, password} = user
  return (
    <div className='sm:container mx-auto px-6  md:px-28  py-32 lg:px-56 flex flex-col justify-between'>
            <Link className='pb-10' to="/">go back</Link>
      <form onSubmit={handleSubmit} className='bg-white rounded-xl p-8 flex flex-col gap-4' >
      <h2 className='text-2xl text-center mb-8'>Login</h2>
        <input onChange={handleInputChange} className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' value={username} type="text" name='username' placeholder='Username' />
        <input onChange={handleInputChange} className='py-2 rounded-lg px-8  bg-light-white-100 outline-none' value={password} type="password" name='password' placeholder='Password' />
        <button  className='border-none px-4 py-2 lg:px-5 lg:py-2 text-xs lg:text-sm text-white rounded-md bg-f-purple mb-2 w-fit'> Login</button>
      </form>
    </div>
  )
}

export default LoginForm