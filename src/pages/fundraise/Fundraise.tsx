import React from 'react'
import './fundraise.css'

const Fundraise = () => {
  return (
    <section className="fundraise">
      <h4>Show the world what you care for.</h4>
      <h3>Who are you showing some love to today?</h3>
      <div className="fundraise-items">
        <div className="item">
          <h3>Yourself</h3>
        </div>
        <div className="item">
          <h3>Family & Friends</h3>
        </div>
        <div className="item">
          <h3>Charity</h3>
        </div>
      </div>
    </section>
  );
}

export default Fundraise