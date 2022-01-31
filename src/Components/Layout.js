import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header><h1>WELCOME TO CRAZYCRYPTO.COM WOOOOOHOOOO!</h1> <Link to='/'>HOME</Link></header>
      
    <Outlet />
    </>
  );
}

export default Layout;
