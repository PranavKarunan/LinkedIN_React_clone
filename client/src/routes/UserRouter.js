import { Routes, Route ,Outlet} from "react-router-dom";
import UserHome from "../Pages/user/UserHome";
import Signin from "../Pages/user/Signin";
import Signup from "../Pages/user/Signupp";
import Otp from "../Pages/user/Otp";


import React from "react";
const user = JSON.parse(localStorage.getItem("user"))
console.log(user)
function UserRouter() {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/otpVerify" element={<Otp />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
    </>
  );
}

export default UserRouter;
