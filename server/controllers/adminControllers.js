import User from '../models/User.js'
import bcrypt from 'bcrypt'



const AdminLogin = async(req,res) =>{
    
    const {email,password} = req.body
    const Admin = await User.findOne({email})
    console.log(Admin)
    await bcrypt.compare(password,Admin.password)
    .then(status=>{
         if(status && Admin.isAdmin){
            res.status(200).json(Admin)
            console.log('login success')
        }else{
            res.status(500).json({message:"wrong credentials"})
            console.log('wrong credentials')
        }
})
}


export {AdminLogin}