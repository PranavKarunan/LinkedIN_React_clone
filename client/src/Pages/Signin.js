import React, { useState } from 'react'
import '../Style/style.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Signin() {
  const [mobile,setMobile] = useState('')
  const [password,setPassword] = useState('')

  const handleSignin = (e)=>{
    e.preventDefault()
    
    axios.post('http://localhost:8800/user/register' ,{mobile, password})
    
  }
  
  
  return (
    <>
  
    <div className='loginScreen'>

        <form onSubmit={handleSignin} >
            <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <input type="number" placeholder='Phone' value={mobile} onChange={(e=>setMobile(e.target.value))} />
            <input type="password" placeholder='Password' value={password} onChange={(e=>setPassword(e.target.value))} />
            <h3 className='link'>Forgot Password?</h3>

            <input type="submit" value="Sign in" />
            <h4>New to LinkedIn? <span><Link to ='/user/register'>Join now</Link></span> </h4>
           

        </form>
      
    </div>
    </>
  )
}


export default Signin