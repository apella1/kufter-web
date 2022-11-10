import React from 'react'
import './contributing.css'

const Contributing = () => {
  return (
    <section className="contributing">
      <p>Getting Started</p>
      <h2>Getting started with Kufter takes a shorter time than you think.</h2>
      <div className="contribution-steps">
        <div className="contribution-feature">
          <h4>1</h4>
          <h3>Start with the basics</h3>
          <p>Get started by taking care of your location and identity</p>
        </div>
        
        <div className="contribution-feature">
          <h4>2</h4>
          <h3>Tell your story</h3>
          <p>With our interactive guide, you'll get help as you tell your story.</p>
        </div>
      
        <div className="contribution-feature">
          <h4>3</h4>
          <h3>Share with your circle</h3>
          <p>As intutive as it is, we still encourage you to get the word out. Someone would sure love your story.</p>
        </div>
      </div>
    </section>
  )
}

export default Contributing