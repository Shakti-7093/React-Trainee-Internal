import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/list"></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;