import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="menu">
      <div className="menuIcon" onClick={toggleMenu}>
        <img  src={location.pathname === "/contact-Us" ? "/assets/Bmenu.png" : "/assets/menu.png"}  />
      </div>
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menuLogo">
          <img
            onClick={toggleMenu}
            className="Bmenu"
            src="/assets/Bmenu.png"
          />
        </div>
        <div className="menuList">
            <Link onClick={closeMenu} to="/">
          <p><img src="/assets/navHome.png" /> Home</p>
            </Link>
          <div className="blackLine" />
          <Link onClick={closeMenu} to="/services">
          <p><img src="/assets/navService.png" /> Services</p>
          </Link>
          <div className="blackLine" />
          <Link onClick={closeMenu} to="/contact-Us">
          <p><img src="/assets/navContact.png" /> Contact</p>
          </Link>
          <div className="blackLine" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
