import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerAdmin } from "../stores/actionCreator"
import { useNavigate } from "react-router-dom";



function RegisterForm(){
    const forNavigate = useNavigate();
    const [ registerForm, setRegisterForm ] = useState({
        email: "",
        password: "",
        userName: "",
        role: "",
        phoneNumber: "",
        Address: ""
    })

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('handleSubmit dipencet nih');
        // const email = event.target.elements.email.value
        // const password = event.target.elements.password.value

        dispatch(registerAdmin(registerForm))
        forNavigate("/")


        // console.log(registerForm, '<<<<<<<<');

        // dispatch()


        // fetch("http://localhost:3000/users", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(registerForm)
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     console.log(data, 'success register');
        // })
        // console.log(registerForm, 'isi dari registerForm nih');

        // console.log(email, password, 'isi dri email dan password');
    }

    const handleChange = (event) => {
        const { value, name } = event.target

        // console.log(registerForm, 'isi dari registerForm nih');

        setRegisterForm({
            ...registerForm,
            [name]: value
        })

    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="email" onChange={handleChange} />
                    <label className="form-label">Email adress</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="userName" onChange={handleChange} />
                    <label className="form-label">User Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="phoneNumber" onChange={handleChange} />
                    <label className="form-label">Phone Number</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="text" className="form-control" name="Address" onChange={handleChange} />
                    <label className="form-label">Address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" name="password" onChange={handleChange} />
                    <label className="form-label">password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign Up</button>
                <div className="text-center">
                </div>
            </form>
        </div>
    )
}

export default RegisterForm
