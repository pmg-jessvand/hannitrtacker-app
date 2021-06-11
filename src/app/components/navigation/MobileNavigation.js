import React, { useState } from 'react';
// Components Import
import { NavigationLinks } from '../../components';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const closeMobileNav = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      <div className="burger">
        <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
      </div>
      {open ? <NavigationLinks isMobile={true} closeNav={closeMobileNav} /> : null }
    </nav>
  );
}

export default MobileNavigation;