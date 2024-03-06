import * as React from 'react';
import HeaderMobile from '../HeaderMobile';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderMobile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
