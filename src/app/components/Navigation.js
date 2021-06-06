import React from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../routes';

const Navigation = () => {

  return (
    <nav>
      <ul>
        <li><Link to={Routes.SCHEDULE}>Planning</Link></li>
        <li><Link to={Routes.REGISTRATIONS}>Registraties</Link></li>
        <li><Link to={Routes.CLIENTS}>Klanten</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;