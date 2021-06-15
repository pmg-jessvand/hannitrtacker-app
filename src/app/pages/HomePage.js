import React from 'react'
// Apollo Imports
// import { gql, useQuery } from '@apollo/client';
// Components Imports

// Assets Imports
import Logo from '../images/ht-logo-shield.svg';

const HomePage = () => {

  return (
    <div className="page home-page">
      <div className="container">
        <div className="welcome-container">
          <div className="image-wrapper">
            <img src={ Logo } alt="hannitracker-logo" />
          </div>
          <div className="text-wrapper">
            <h2>Welcome</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
