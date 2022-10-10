import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { dosms, otpVerify } from "../config/verifyUser.js";

const userRegister = async (req, res) => {
  const { name, mobile, password } = req.body;
  console.log(mobile);
  req.session.user = true;
  req.session.user = req.body;

  console.log(req.session.user);

  if (!name || !mobile || !password) {
    return res.status(400).json({ message: "Please add all fields" });
  }

  //  typeof req.body.id === 'string' ? await User.findOne({email:req.body.email}) :  await User.findOne({mobileNumber:req.body.mobileNumber})

  // if(typeof req.body.id === 'string'){
  //     console.log('email')
  //     let user = await User.findOne({email:req.body.id})
  //     if(user){

  //         return res.status(400).json({message:'email already exists please try other'})

  //     }else{

  //         let newUser = new User({
  //             name:req.body.name,
  //             email: req.body.id,
  //             password: hashedPassword
  //         })
  //     }
  // }else{
  // console.log('mob')

  let moblen = mobile.toString().length;
  console.log(moblen);
  if (moblen == 10) {
    let user = await User.findOne({ mobileNumber: mobile });

    if (user) {
      console.log("user is already exist");
      return res
        .status(400)
        .json({ message: "mobile already exists please try other" });
    } else {
      console.log("req.body is in backend");
      let otp = dosms(req.body.mobile);

      if (!otp.valid) {
        res
          .status(200)
          .json({
            created: true,
            hash: otp.hash,
            message: "OTP sent successfully",
          });
      }
      // try{
      //     let hashedPassword = await bcrypt.hash(req.body.password,10)
      //     let newUser = new User({
      //         name:req.body.name,
      //         mobileNumber: mobile,
      //         password: hashedPassword
      //     })

      //     const savedUser = await newUser.save()
      //     res.status(201).json(savedUser)
      // }catch(err){
      //     res.status(500).json(err)
      //     console.log(err)
      // }
    }
  } else {
    res.status(400).json({ message: "Please enter a valid number" });
    console.log("number not valid");
  }
};

const otpValidation = async (req, res) => {
  // let valid = otpVerify(req.body,req.session.user.mobile)
  // console.log(valid)
};

//   };

const userLogin = async (req, res) => {
  let hashedPassword = await bcrypt.hash(req.body.password, 10);
  console.log(hashedPassword);
  const { mobileNumber, password } = req.body;
  const user = await User.findOne({ mobileNumber });
  try {
    user && (await bcrypt.compare(password, user.password));
    res.json({
      name: user.name,
      mobileNumber: user.mobileNumber,
      _id: user._id,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { userRegister, userLogin, otpValidation };
