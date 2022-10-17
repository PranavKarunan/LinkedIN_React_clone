import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Otp() {
    const signupData = JSON.parse(localStorage.getItem("user"))
    console.log(signupData)
    const navigate = useNavigate()
    const [otp,setOtp] = useState('')
    const handleOtp = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8800/otpValidation',{otp,signupData})
        .then(res=>{
            navigate('/userHome')
        })
            
    }
    
  return (

<div className='loginScreen'>
     
<form onSubmit={handleOtp}>
    <h3 className='headline'>Enter otp here</h3>

    <input type="number" placeholder='Enter your otp here' value={otp} onChange = {(e)=>setOtp(e.target.value)} />

    <input type="submit" value= "Submit" />
    <h4>not recieved yet?<span ><Link to="/register">Go to signup</Link></span> </h4>

   

</form>

</div>  

)
  
}

export default Otp