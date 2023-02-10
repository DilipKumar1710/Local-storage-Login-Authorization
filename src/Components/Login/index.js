import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        pswd: '',
    })

    const checkUserDetails = (event) => {
        event.preventDefault();
        const userDetails = JSON.parse(localStorage.getItem("user"));
        if (input.email === "" && input.pswd === "") {
            alert("EmailId And Passwords Fields Should not be Empty");
        }
        else if (input.email === "") {
            alert("Please Enter EMAIL ID");
        }
        else if (input.pswd === "") {
            alert("Please Enter PASSWORD");
        }
        else if (userDetails.email !== input.email) {
            alert("Please Enter Correct EMAIL ID");
        }
        else if (userDetails.pwd !== input.pswd) {
            alert("Please Enter Correct PASSWORD");
        }
        else if (userDetails.email === input.email && userDetails.pwd === input.pswd) {
            localStorage.setItem('isLoggedIn', true);
            navigate('/');
        }
        else {
            alert("Please Enter Correct EmailId Or Password");
        }
    }

    const handleUserDetails = (event) => {
        setInput({
            ...input, [event.target.name]: event.target.value
        })
    }

    return (
        <div className='login-main-container'>
            <div className='login-form-container'>
                <h1 className='login-page-heading'>LOGIN PAGE</h1>
                <form className='login-form' onSubmit={checkUserDetails}>
                    <label for="emailId" className='login-label'>EMAIL ID</label>
                    <input type="email" id="emailId"
                        name="email"
                        value={input.email}
                        onChange={handleUserDetails}
                        className='login-input-box' />
                    <label for="password" className='login-label'>PASSWORD</label>
                    <input type="password" id="password"
                        name="pswd"
                        value={input.pswd}
                        onChange={handleUserDetails} className='login-input-box' />
                    <button type="submit" className='submit-btn'>LOG IN</button>
                </form>
                <div className='login-note-container'>
                    <p className='login-note'>Don't Have an account?</p>
                    <Link to="/register" className='register-link'>Register Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
