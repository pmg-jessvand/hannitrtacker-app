import React from 'react';
import { Link } from 'react-router-dom';
import { useGetBaseUri } from '../../hooks';

import * as Routes from '../../routes';

const NavigationLinks = ({ isMobile, closeNav }) => {

  const baseUri = useGetBaseUri();

  return (
    <ul>
      <li onClick={() => isMobile && closeNav() }><Link to={Routes.SCHEDULE}>Planning</Link></li>
      <li onClick={() => isMobile && closeNav() }><Link to={Routes.CLIENTS}>Klanten</Link></li>
      <li onClick={() => isMobile && closeNav() }> <a href={`${baseUri}/user`} target="_blank" rel="noreferrer">Backend</a> </li>
    </ul>
  )
}

export default NavigationLinks;