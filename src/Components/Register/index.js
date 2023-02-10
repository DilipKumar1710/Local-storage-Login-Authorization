import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        email: '',
        pwd: ''
    });

    const renderUserDetails = (event) => {
        event.preventDefault();
        if (input.name === "") {
            alert("Please Enter USER NAME");
        }
        else if (input.email === "") {
            alert("Please Enter EMAIL ID");
        }
        else if (input.pwd === "") {
            alert("Please Enter PASSWORD");
        }
        else {
            localStorage.setItem("user", JSON.stringify(input));
            navigate('/login');
        }
    }

    return (
        <div className='main-container'>
            <div className='form-container'>
                <h1 className='register-heading'>REGISTER PAGE</h1>
                <form className='form' onSubmit={renderUserDetails}>
                    <label className='label' for="username">USERNAME</label>
                    <input id="username" type="text"
                        name="name"
                        value={input.name}
                        onChange={(event) => setInput({
                            ...input, [event.target.name]: event.target.value
                        })}
                        className='register-input-box' />
                    <label className='label' for="emailId">EMAIL ID</label>
                    <input id="emailId" type="email"
                        name="email"
                        value={input.email}
                        onChange={(event) => setInput({
                            ...input, [event.target.name]: event.target.value
                        })}
                        className='register-input-box' />
                    <label className='label' for="password">PASSWORD</label>
                    <input id="password" type="password"
                        name="pwd"
                        value={input.pwd}
                        onChange={(event => setInput({
                            ...input, [event.target.name]: event.target.value
                        }))}
                        className='register-input-box' />
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <div className='register-note-container'>
                    <p className='register-note'>Have already an account?</p>
                    <Link to="/login" className='login-link'>Login Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;