import * as React from 'react';
import HeaderMobile from '../HeaderMobile';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderMobile />
      {children}
    </>
  );
};

export default Layout;
