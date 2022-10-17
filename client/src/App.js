import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminRouter from "./routes/AdminRouter";
import UserRouter from "./routes/UserRouter";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </>
  );
}

export default App;
