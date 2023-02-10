import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
    const navigate = useNavigate();
    const userDetails = JSON.parse(localStorage.getItem('user'));

    const onClickLogoutBtn = () => {
        localStorage.removeItem("isLoggedIn");
        navigate('/login');
    }
    return (
        <div className='home-main-container'>
            <nav className='nav-bar'>
                <h1 className='home-logo'>Dilip World</h1>
                <ul className='navigate-links-container'>
                    <Link to="/" className='nav-link'><li>Home</li></Link>
                    <Link to="/about" className='nav-link'><li>About</li></Link>
                    <Link to='/contact' className='nav-link'><li>Contact</li></Link>
                    <button type="button" onClick={onClickLogoutBtn} className='logout-btn'>Logout</button>
                </ul>
            </nav>
            <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662028047/cld-sample-2.jpg" alt="banner" className='banner' />
            <h1 className='Welcome-note'>Hello!! Welcome back,  <span className='username'>{userDetails.name}</span></h1>
        </div>
    )
}

export default Home;
