import './Navbar.css';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FcMenu, FcCollapse } from 'react-icons/fc';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    // console.log(clicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">M</h1>
        <div className="menu-icons" onClick={handleClick}>
          <a>{clicked ? <FcCollapse /> : <FcMenu />}</a>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sample
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Layouts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Our Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Buy Themes
            </a>
          </li>
          <li className="nav-item">
            <AiOutlineSearch className="nav-link nav-search-icon" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
