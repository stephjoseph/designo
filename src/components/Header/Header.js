import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useLocation } from '@reach/router';
import { header, headerLogo, headerNav } from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  return (
    <header className={header}>
      <Link to='/'>
        <StaticImage
          src='../../images/shared/desktop/logo-dark.png'
          alt='designo logo'
          className={headerLogo}
        />
      </Link>
      <nav className={headerNav}>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          {isHomepage ? (
            <li>
              <a href='#services'>Services</a>
            </li>
          ) : (
            <li>
              <Link to='/#services'>Services</Link>
            </li>
          )}
          <li>
            <Link to='/contact-us'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
