import React from 'react';
import { Link } from 'react-router-dom';

import { MobileNavigation, DesktopNavigation } from '../components';
import * as Routes from '../routes';

import Logo from '../images/ht-logo-horizontal.svg';

const Header = () => {

  return (
    <header>
      <div className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-3 col-xl-3 header-col">
              <div className="logo-wrapper">
                <Link to={Routes.HOME}>
                  <img src={ Logo } alt="hannitracker-logo" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-9 col-xl-9 header-col">
              <MobileNavigation />
              <DesktopNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;