// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4FAFF]">
      <NavBar />
      <main className="flex-grow pt-[50p] md:pt-[90p]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
