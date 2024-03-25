import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "5%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
