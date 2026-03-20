import React, { useState } from 'react'
import "../style/form.scss"
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setUPassword] = useState("")

  const {handleLogin, loading} = useAuth()
  const navigate = useNavigate()

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    handleLogin(username, password)
    .then(res=>{
      console.log(res)
      navigate("/")
    })
     .catch(err => {
      console.log(err)
    })
  }
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                onInput={(e)=>{setUsername(e.target.value)}}
                type="text" 
                name='username' 
                placeholder='Enter username' />
                <input
                onInput={(e)=>{setUPassword(e.target.value)}}
                type="password" 
                name='password' 
                placeholder='Enter password' />
                <button type='submit'>Login</button>
            </form>

        <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>

        </div>
    </main>
  )
}

export default Login