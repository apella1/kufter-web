import React from 'react'
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="header-cta">
        <p>Fund Your Project</p>
        <p>With Kufter</p>
      </div>

      <a href="start" className="cta-link">Get Started With Kufter</a>
    </header>
  )
}

export default Header