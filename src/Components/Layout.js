import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header> HELLO WELCOME TO CRAZYCRYPTO.COM WOOOOOHOOOO!</header>
    <Outlet />
    </>
  );
}

export default Layout;
