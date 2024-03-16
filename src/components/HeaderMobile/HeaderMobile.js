import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  headerMobile,
  headerMobileLogo,
  headerMobileButton,
  headerMobileNav,
  headerMobileNavOpen,
} from './HeaderMobile.module.css';
import { useLocation } from '@reach/router';
import { Divide as Hamburger } from 'hamburger-react';

const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isNavOpen]);

  const isHomepage = location.pathname === '/';

  const handleNavClick = (event) => {
    if (event.target.closest('ul')) {
      return;
    }

    closeNav();
  };

  return (
    <header className={headerMobile}>
      <Link to='/'>
        <StaticImage
          className={headerMobileLogo}
          src='../../images/shared/desktop/logo-dark.png'
          alt='designo logo'
        />
      </Link>
      <div className={headerMobileButton}>
        <Hamburger
          toggled={isNavOpen}
          toggle={setIsNavOpen}
          size={30}
          distance='sm'
          color='#1D1C1E'
        />
      </div>
      <nav
        className={`${headerMobileNav} ${isNavOpen ? headerMobileNavOpen : ''}`}
        onClick={handleNavClick}
      >
        <ul>
          <li>
            <Link to='/about' onClick={closeNav}>
              About
            </Link>
          </li>
          {isHomepage ? (
            <li>
              <a href='#services' onClick={closeNav}>
                Services
              </a>
            </li>
          ) : (
            <li>
              <Link to='/#services' onClick={closeNav}>
                Services
              </Link>
            </li>
          )}
          <li>
            <Link to='/contact-us' onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMobile;
