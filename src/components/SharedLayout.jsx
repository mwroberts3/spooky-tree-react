import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import Footer from './Footer';


const SharedLayout = () => {
  return <>
    <HeaderNav />
    <Outlet />
    <Footer />
  </>
}

export default SharedLayout