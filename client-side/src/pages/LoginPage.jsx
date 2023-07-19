import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../stores/actionCreator";

function LoginPage() {
  const forNavigate = useNavigate();

  const toRegister = (event) => {
    event.preventDefault();
    forNavigate("/register");
  };

  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("tombol submit dipencet", loginForm);
    dispatch(handleLogin(loginForm));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prevLoginForm) => ({
      ...prevLoginForm,
      [name]: value
    }));
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
            <label className="form-label">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
            <label className="form-label">Password</label>
          </div>

          <button type="submit" className="btn btn-danger btn-block mb-4">
            Sign in
          </button>
          <div className="text-center">
            <p>
              Not a member? <a onClick={toRegister}>click here!!</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
