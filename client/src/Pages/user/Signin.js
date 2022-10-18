import React, { useState } from "react";
import "../../Style/style.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { Stack } from '@mui/material' 

const initialValues = {
  userName: "",
  password: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.userName) {
    errors.userName = "User Name is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.toString().length < 6) {
    errors.password = "Password should be atleast 6 digits";
  }
  return errors;
};
function Signin() {
  const [error,setError] =useState("")
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
  
    try {
      const { data } = await axios.post("http://localhost:8800/login", {
        values,
      });

      console.log(data);
      navigate("/");
      localStorage.setItem("user", JSON.stringify(data));

      dispatch({ type: "LOGIN", payload: data });
      setError("")
      
    } catch (error) {
      setError(error.response.data.message)
      
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="loginScreen">
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h3">Signin</Typography>
          <Typography variant="h6" gutterBottom>Stay updated on your professional world</Typography>
          <Stack spacing={4} direction ={"column"}>
          <div className="form-control">
            <label>Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
            {formik.errors.userName ? (
              <div className="error">{formik.errors.userName}</div>
            ) : null}
          </div>
          </Stack> 
          

          <div className="form-control">
            <label>Password (6 or more characters)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          {
          error&& <div className="error">
            {error}
          </div>
        }
          <h4 className="link">Forgot Password ?</h4>

          <input type="submit" value="Sign in" />
          <h4>
            New to LinkedIn?{" "}
            <span>
              <Link to="/register">Join now</Link>
            </span>{" "}
          </h4>
        </form>
       
      </div>
    </>
  );
}

export default Signin;
