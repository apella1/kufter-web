import React from 'react'
import './fundraise.css'

const Fundraise = () => {
  return (
    <section className="fundraise">
      <h4>A dollar a day can change the world from burning.</h4>
      <h3>Who are you helping save the world?</h3>
      <div className="fundraise-items">
        <div className="item">
          <h3>Individual</h3>
        </div>
        <div className="item">
          <h3>Organisation</h3>
        </div>
        <div className="item">
          <h3>Community</h3>
        </div>
      </div>
    </section>
  );
}

export default Fundraise

