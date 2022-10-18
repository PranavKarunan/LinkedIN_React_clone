import bcrypt from "bcrypt";
import User from "../models/User.js";
import { dosms, otpVerify } from "../config/twilioConfig.js";
import { validEmail } from "../helpers/validate.js";
import accessToken from "../helpers/generateToken.js";

const userRegister = async (req, res) => {
  const { name, userName, mobile, password, confirmPassword } = req.body.values;

  const userNameExist = User.findOne({ userName: userName });

  const uniqueId = Number(mobile);
  console.log(uniqueId);

  try {
    if (uniqueId) {
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
          const userNameExist = await User.findOne({ userName : userName})
          if(userNameExist){
            return res.status(400).json({message:"user name already exist please try other"})
          }
          let otp = dosms(mobile);

          if (!otp.valid) {
            res.status(200).json({
              created: true,
              hash: otp.hash,
              message: "OTP sent successfully",
              user: req.body.values,
            });
          }
        }
      } else {
        res.status(400).json({ message: "Please enter a valid number" });
        console.log("number not valid");
      }
    } else {
      if (!validEmail(mobile)) {
        return res.status(400).json({ message: "invalid email" });
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const otpValidation = async (req, res) => {
  const { otp, signupData } = req.body;

  try {
    let valid = await otpVerify(otp, signupData.mobile);
    console.log({ valid });
    let hashedPassword = await bcrypt.hash(signupData.password, 10);
    if (valid.valid) {
      let newUser = new User({
        name: signupData.name,
        userName: signupData.userName,
        mobileNumber: signupData.mobile,
        password: hashedPassword,
      }).save();
      const token = accessToken(newUser);
      console.log(token);
      res.status(201).json(newUser, token);
    } else {
      res.status(500).json({ message: "validation failed" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const userLogin = async (req, res) => {
  const { userName, password } = req.body.values;
  const user = await User.findOne({ userName: userName });
  

  try {
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        const token = accessToken(user);
        console.log(token);
        res.status(200).json({
          name: user.name,
          mobileNumber: user.mobileNumber,
          userName: userName,
          _id: user._id,
          token,
        });
      } else {
        res.status(500).json({ message: "Please enter correct password" });
      }
    } else {
      res
        .status(500)
        .json({
          message: "User not found!!! Please check your username and try again",
        });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { userRegister, userLogin, otpValidation };
