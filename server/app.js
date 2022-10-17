import express from'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()


import dbConnection from './config/Db.js'
import userRouter from './routes/userRoute.js'
import adminRouter from './routes/adminRoute.js'

const app = express()


app.use(express.json())  // middleware to print json data
app.use(cors())
dbConnection()

// cookie parser middleware
app.use(cookieParser());


app.use('/',userRouter);
app.use('/admin',adminRouter)

let PORT = process.env.PORT || 8800

app.listen(PORT,(err)=>{
   try {
    if (err){
        console.log("Server not connected due to " ,err.message);
    }else{
        console.log(`Server connected on port ${PORT} successfully`);
    }
   } catch (error) {
    res.status(500).json(error)
   }
})