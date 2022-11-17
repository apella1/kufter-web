import React from 'react'
import './feature.css'

const Feature = ({ title, url, text, postTitle}: {title: string, text: string, url: string, postTitle: string}) => {
  return (
    <div className='feature'>
        <div className="feature-intro">
            <h3>{title}</h3>
        </div>
        <div className="feature-description">
            <h3>
                {postTitle} 
            </h3>
            <a href={url}>{text}</a>
        </div>
    </div>
  )
}

export default Feature
