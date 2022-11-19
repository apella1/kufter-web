import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="home">Search</a>
            <a href="about">Donate</a>
            <a href="projects">For Equity</a>
            <a href="logo" className='navbar-logo'>Kufter</a>
            <a href="testimonials">Learn</a>
            <a href="community">Circular Economy Community</a>
            <a href="sign-in">Sign In</a>
            <a href='get-started' className='navbar-cta'>Start Kufter</a>
        </nav>
    )
}

export default Navbar;
