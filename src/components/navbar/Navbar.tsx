import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="home">Search</a>
            <a href="about">For Individual</a>
            <a href="projects">For Charity</a>
            <a href="logo" className='navbar-logo'>Kufter</a>
            <a href="testimonials">How it works</a>
            <a href="sign-in">Sign in</a>
            <a href='get-started' className='navbar-cta'>Start Kufter</a>
        </nav>
    )
}

export default Navbar;
