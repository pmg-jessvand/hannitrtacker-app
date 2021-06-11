import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

const NavigationLinks = ({ isMobile, closeNav }) => {

  return (
    <ul>
      <li onClick={() => isMobile && closeNav() }><Link to={Routes.SCHEDULE}>Planning</Link></li>
      <li onClick={() => isMobile && closeNav() }><Link to={Routes.REGISTRATIONS}>Registraties</Link></li>
      <li onClick={() => isMobile && closeNav() }><Link to={Routes.CLIENTS}>Klanten</Link></li>
    </ul>
  )
}

export default NavigationLinks;