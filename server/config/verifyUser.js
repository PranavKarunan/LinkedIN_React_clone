import dotenv from 'dotenv'
dotenv.config()
const accountSid = process.env.TWILIO_ACCOUNTS_ID ;
const authToken = process.env.TWILIO_AUTHTOKEN_ID;
const serviceSID = process.env.TWILIO_SERVICES_ID;
import twilio from 'twilio'
const client = twilio(accountSid,authToken);


   

  const dosms = (noData)=>{
      console.log(noData)
     let res = {}
      return new Promise(async(resolve,reject)=>{
        
      client.verify.services(serviceSID).verifications.create({
       
        to : `+91${noData}`,
        channel : "sms"


      }).then((res)=>{

        res.valid = false;
        resolve(res)
     console.log(res);

    
    }).catch((err)=>{
      console.log(err)
    })
        


      })
      
      
    }


   

   const  otpVerify = (otpData,noData)=>{

      console.log(otpData,noData);

        let resp = {}
        return new Promise(async(resolve,reject)=>{
           
        await client.verify.services(serviceSID).verificationChecks.create({
         
          to : `+91${noData}`,
          code : otpData.otp
  
  
        }).then((res)=>{
  
         console.log(res)
         resolve(res)
  
      
      }).catch((err)=>{
        console.log(err)
      })
          
  
  


        })
    }
  
    export {dosms,otpVerify}
