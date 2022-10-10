import React, { useState } from 'react'
import '../Style/style.scss'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'



function AdminLogin() {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] =useState('')
  const handleLogin = (e) =>{
    e.preventDefault()
    
    axios.post('http://localhost:8800/admin/login',{ email ,password}).then(res=>{
      if(res.status ==200){
        navigate('/admin/admin_dashboard')
      }
    })
    
  }
  return (
    <div className='loginScreen'>

    <form onSubmit={handleLogin} >
        <h1>Welcome back  </h1>
        
        <input type="email" placeholder='email' value={email} onChange={(e=>setEmail(e.target.value))} />
        <input type="password" placeholder='Password' value={password} onChange={(e=>setPassword(e.target.value))} />
        <h3 className='link'>Forgot Password?</h3>

        <input type="submit" value="Log in" />
        
       

    </form>
  
</div>
  )
}

export default AdminLogin