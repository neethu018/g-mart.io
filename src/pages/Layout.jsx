import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../components/navbar/TopNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <TopNavbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
