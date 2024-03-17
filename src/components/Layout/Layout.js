import * as React from 'react';
import HeaderMobile from '../HeaderMobile';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderMobile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
