import React from 'react'
import './callToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h2>Ready to embark on this journey? <span>Get riding along with several others now!</span></h2>
      <div className="cta-buttons">
        <a href="starteed" className='cta-now'>Get Started with Kufter</a>
        <a href="works" className='cta-how'>How Kufter Works</a>
      </div>
    </section>
  )
}

export default CallToAction