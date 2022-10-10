import React, { useState } from 'react'
import '../Style/style.scss'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { current } from '@reduxjs/toolkit'

function Signup() {

    const [name , setName] =useState('')
    const [mobile , setMobile] =useState('')
    const [password, setPassword] =useState('')
    const [otpSent,setOtpSend] = useState(false)
    const [error,setError] = useState('')

    const navigate = useNavigate()
    const handleSignup = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8800/user/register`,{name,mobile,password}).then(res=>
        {   
            console.log('first')
            // if(!res.response.data.message)
            // {
                navigate('/user/otpVerify',{name,mobile,password})
                setOtpSend(current => !current)
                console.log(otpSent)
            // }else{
                setError(res.response.data.message)
            // }
        })
       
    }

  return (
    <>
  
    <div className='loginScreen'>

    
    
        
        <form onSubmit={handleSignup}>
            <h3 className='headline'>Make the most of your professional life</h3>

            <label >Name</label>
            <input type="text" value={name} onChange={(e=>setName(e.target.value))}  />

            <label>Phonenumber</label>
            <input type="number" value={mobile} onChange={(e=>setMobile(e.target.value))} />

            <label>Password (6 or more characters)</label>
            <input type="password" value={password} onChange={(e=>setPassword(e.target.value))} />

            <input type="submit" value= "Agree & Join" />
            <p>{error}</p>
            <h4>Already on LinkedIn? <span ><Link to="/">Sign in</Link></span> </h4>

        </form>

        
      
   
    </div>
    </>
  )
}



export default Signup