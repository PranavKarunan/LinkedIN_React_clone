import { Routes, Route ,Outlet} from "react-router-dom";
import UserHome from "../Pages/user/UserHome";
import Signin from "../Pages/user/Signin";
import Signup from "../Pages/user/Signupp";
import Otp from "../Pages/user/Otp";


import React from "react";
import { LoggedIn, NotLoggedIn } from "../auth/authUser";
const user = JSON.parse(localStorage.getItem("user"))
console.log(user)
function UserRouter() {
  
  return (
    <>
      <Routes>
        
        <Route element = {<LoggedIn />}>
        <Route path="/" element={<UserHome />} />
        </Route>
        <Route element = {<NotLoggedIn />}>
        <Route exact path="/signin" element={<Signin />} />
        </Route>
        <Route path="/register" element={<Signup />} />
        <Route path="/otpVerify" element={<Otp />} />
       
      </Routes>
    </>
  );
}

export default UserRouter;
