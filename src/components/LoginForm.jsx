/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Joi from 'joi-browser'
import AuthContext from './../context/auth/authContext';
import Input from './common/Input';
import validateFormInput from './utils/validateFormInput';
import Btn from './common/Btn';

function LoginForm() {

  const { loginUser, isAuthenticated, error, clearError } = useContext(AuthContext)
  

  const [user, setUser] = useState({
    username: '',
    password: "",
  })
  const [errors, setErrors] = useState({})


  
  useEffect(() => {
    if (isAuthenticated) {
      window.location = '/'
    }

    if (error === "invalid username or password") {
      const newError = { ...errors }
      newError.username = error
      setErrors(newError)
      clearError()
    }
  },[isAuthenticated, error])

  const schema = Joi.object( {
    username: Joi.string().required().min(3).label("Username"),
    password : Joi.string().required().min(4).label("Password")
  })
 
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateFormInput(user, schema)
    if (errors) {
      setErrors(errors)
    } else {
      loginUser(user)
      setErrors({})
    }
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

        <Input onChange={handleInputChange} value={username} name='username' type="text" label='Username' error={errors.username} />
      
        <Input onChange={handleInputChange} value={password} name='password' type="password" label='Password' error={errors.password} />

        <Btn title="Login" styles=" bg-f-purple mb-2 w-fit"/>
      </form>
    </div>
  )
}

export default LoginForm