import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/other">Incorrect URL</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
