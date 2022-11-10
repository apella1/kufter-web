import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <a href="logo" className="footer-logo">Kufter</a>
        <div className="footer-fundraise">
          <h4>Contribute to</h4>
          <a href="edu">Education</a> 
          <a href="medical">Medical</a>
          <a href="memorial">Memorial</a>
          <a href="nonprofit">Nonprofit</a>
        </div>

        <div className="footer-learn">
          <h4>Get to know us</h4>
          <a href="how">How Kufter Works</a>
          <a href="why">Why Kufter</a>
          <a href="fqa">Frequently Asked Questions</a>
          <a href="tes">Testimonials</a>
          <a href="cc">Supported Countries</a>
          <a href="pricing">Pricing</a>
        </div>

        <div className="footer-resources">
          <h4>Resources</h4>
          <a href="blog">Visit Our Blog</a>
          <a href="career">Careers</a>
          <a href="about">About</a>
        </div>
      </div>
      <div className="footer-public">
        <div className="footer-legal">
          <p>&copy; Kufter 2022</p>
          <p><a href="tc">Terms and Conditions</a></p>
          <p><a href="privacy">Privacy</a></p>
        </div>

        <div className="footer-social">
          <a href="fb">Facebook</a>
          <a href="tw">Twitter</a>
          <a href="ig">Instagram</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer