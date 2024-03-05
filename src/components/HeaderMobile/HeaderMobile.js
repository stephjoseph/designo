import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { headerMobile, logo } from './HeaderMobile.module.css';

const HeaderMobile = () => {
  return (
    <header className={headerMobile}>
      <Link to='/'>
        <StaticImage
          className={logo}
          src='../../images/shared/desktop/logo-dark.png'
          alt='designo logo'
        />
      </Link>
      <button>
        <StaticImage
          src='../../images/shared/mobile/icon-hamburger.svg'
          alt='hamburger icon'
        />
      </button>
    </header>
  );
};

export default HeaderMobile;
