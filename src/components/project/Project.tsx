import React from 'react'
import './project.css'

const Project = ( {imgUrl, title, projectDescription, amount, numberOfDonations} ) => {
  return (
    <div className='project'>
        <img src={imgUrl} alt={title.toLocaleLowerCase()} />
        <h3>{title}</h3>
        <p>
            {projectDescription}
        </p>
        <div className="project-donation">
            <p className='donation-amount'>${amount} raised</p>
            <p className='donation-number'>{numberOfDonations} {numberOfDonations === 1 ?  'donation' : 'donations'}</p>
        </div>
    </div>
  )
}

export default Project
