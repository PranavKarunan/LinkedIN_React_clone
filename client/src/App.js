import React from "react";
import Header from "./Components/Header";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Otp from "./Pages/Otp";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <div className="containers">
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/user/register" element={<Signup />} />
            <Route path="/user/otpVerify" element={<Otp />} />
            <Route path="/admin/login" element={<AdminLogin/>} />
            <Route path="/admin/admin_dashboard" element ={<AdminDashboard/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
