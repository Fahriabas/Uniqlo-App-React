import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";

function LoginForm() {

  const dispatch = useDispatch()
  const [ loginForm, setLoginForm ] = useState({
    email : "",
    password: ""
  })


  console.log(loginForm, 'isi dari localstate login form');


  const forNavigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit dipencet nih<<<<<');
    dispatch(handleLogin(loginForm))
    forNavigate("/")
    
  };

  const handleChange = (event) => {
    const { value, name } = event.target
    setLoginForm({
      ...loginForm,
      [name] : value
    })
  }

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
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
            onChange={handleChange}
          />
          <label className="form-label">Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        <div className="text-center"></div>
      </form>
    </div>
  );
}

export default LoginForm;
