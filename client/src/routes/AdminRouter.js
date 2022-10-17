import {  Routes, Route } from "react-router-dom";
import AdminLogin from "../Pages/Admin/AdminLogin";
import AdminDashboard from "../Pages/Admin/AdminDashboard";

import React from "react";

function AdminRouter() {
  return (
    <>
      
          <Routes>
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
          </Routes>
      
    </>
  );
}

export default AdminRouter;
