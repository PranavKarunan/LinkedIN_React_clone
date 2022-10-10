import axios from 'axios'
import React, { useState } from 'react'


function Otp(props) {
    console.log(props)
    const [otp,setOtp] = useState('')
    const handleOtp = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8800/user/otpValidation',{otp})
        .then(res=>{
            console.log('res is ',res)
        })
            
    }
  return (

<div className='loginScreen'>
     
<form onSubmit={handleOtp}>
    <h3 className='headline'>Enter otp here</h3>

    <input type="number" placeholder='Enter your otp here' value={otp} onChange = {(e)=>setOtp(e.target.value)} />

    <input type="submit" value= "Submit" />

   

</form>

</div>

)
  
}

export default Otp