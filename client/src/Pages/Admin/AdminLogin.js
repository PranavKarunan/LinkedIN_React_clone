import React, { useState } from "react";
import "../../Style/style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "email is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.toString().length < 6) {
    errors.password = "Password should be atleast 6 digits";
  }
  return errors;
};

function AdminLogin() {
  const [error, setError] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    
    try {
      const { data } = await axios.post("http://localhost:8800/admin/login", {
        values,
      });

      console.log(data);
      navigate("/admin/adminDashboard");
      // dispatch({ type: "LOGIN", payload: data });
      setError("");
    } catch (error) {
      console.log(error)
      setError(error.response.data.message);
      console.log(error.response.data.message);
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
          <h1>Admin Login</h1>
          <p>Welcome back admin</p>
          <div className="form-control">
            <label>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="form-control">
            <label>Password</label>
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
          {error && <div className="error">{error}</div>}
          <h4 className="link">Forgot Password ?</h4>

          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
