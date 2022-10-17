import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../Style/style.scss";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

const initialValues = {
  name: "",
  userName: "",
  mobile: "",
  password: "",
  confPassword: "",
};

const validate = (values) => {
  let errors = {};
  var IndNo = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (!values.name) {
    errors.name = "name is required";
  }

  if (!values.mobile) {
    errors.mobile = "mobile number is required";
  } else if (!IndNo.test(values.mobile)) {
    errors.mobile = "Please enter valid mobile number";
  }

  if (!values.userName) {
    errors.userName = "User Name number is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.toString().length < 6) {
    errors.password = "Password should be atleast 6 digits";
  }

  if (!values.confPassword) {
    errors.confPassword = "confirm Password is required";
  } else if (values.confPassword !== values.password) {
    errors.confPassword = "Confirm password should be same";
  }

  return errors;
};

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    axios.post(`http://localhost:8800/register`, { values }).then((res) => {
      console.log(res);
      navigate("/otpVerify");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch({ type: "LOGIN", payload: res.data.user });
    });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="loginScreen">
      <form onSubmit={formik.handleSubmit}>
        <h3 className="headline">Make the most of your professional life</h3>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label>Phonenumber</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />
          {formik.errors.mobile ? (
            <div className="error">{formik.errors.mobile}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label>User Name</label>
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

        <div className="form-control">
          <label>Confirm Password </label>
          <input
            type="password"
            id="confPassword"
            name="confPassword"
            value={formik.values.confPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.confPassword ? (
            <div className="error">{formik.errors.confPassword}</div>
          ) : null}
        </div>

        <Button type="submit" variant="contained">
          Agree & Join
        </Button>

        <h4>
          Already on LinkedIn?{" "}
          <span>
            <Link to="/">Sign in</Link>
          </span>{" "}
        </h4>
      </form>
    </div>
  );
}

export default Signup;
