import { useState } from "react";
import { useNavigate } from "react-router";
// import { useDispatch } from "react-redux";

function RegisterPage() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    userName: "",
    phoneNumber: "",
    Address: "",
  });

  //   const dispatch = useDispatch()
  const forNavigate = useNavigate()

  const toLogin = (event) => {
    event.preventDefault()
    forNavigate("/login")
  }

  const handleChange = (event) => {
    const { value, name } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("tombol submit dipencet");
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1>Sign Up</h1>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
          <label className="form-label">Email adress</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="userName"
            onChange={handleChange}
          />
          <label className="form-label">User Name</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="phoneNumber"
            onChange={handleChange}
          />
          <label className="form-label">Phone Number</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            className="form-control"
            name="Address"
            onChange={handleChange}
          />
          <label className="form-label">Address</label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <label className="form-label">password</label>
        </div>

        <button type="submit" className="btn btn-danger btn-block mb-4">
            Sign Up
          </button>
        <div className="text-center">
          <p>
           already have a member? <a onClick={toLogin}>click here!!</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
