import React from 'react'
// Components Imports

// Assets Imports
import Logo from '../images/ht-logo-shield.svg';

const HomePage = () => {

  return (
    <div className="page home-page">
      <div className="container">
        <div className="welcome-container animate__animated animate__fadeInUp">
          <div className="image-wrapper">
            <img src={ Logo } alt="hannitracker-logo" />
          </div>
          <div className="text-wrapper">
            <h2>Welkom</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
