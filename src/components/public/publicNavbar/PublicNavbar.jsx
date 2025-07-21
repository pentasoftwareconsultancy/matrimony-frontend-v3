import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./PublicNavbar.module.css";
import logo from "../../../assets/Navbar/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function PublicNavbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logoImg} />

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNavLinks}>
            <Link
              to="/"
              className={`${styles.navItem} ${
                isActive("/") ? styles.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${styles.navItem} ${
                isActive("/about") ? styles.active : ""
              }`}
            >
              About us
            </Link>
            <Link
              to="/services"
              className={`${styles.navItem} ${
                isActive("/services") ? styles.active : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/membership"
              className={`${styles.navItem} ${
                isActive("/membership") ? styles.active : ""
              }`}
            >
              Membership
            </Link>
            <Link
              to="/contact"
              className={`${styles.navItem} ${
                isActive("/contact") ? styles.active : ""
              }`}
            >
              Contact us
            </Link>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <Link to="/login" className={styles.loginBtn}>
            Login / Register
          </Link>

          {/* Mobile Menu Button - Only visible on tablet/mobile */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav
          className={`${styles.mobileNavLinks} ${
            menuOpen ? styles.showMobileMenu : ""
          }`}
        >
          <Link
            to="/"
            className={`${styles.navItem} ${
              isActive("/") ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${styles.navItem} ${
              isActive("/about") ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
          <Link
            to="/services"
            className={`${styles.navItem} ${
              isActive("/services") ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/membership"
            className={`${styles.navItem} ${
              isActive("/membership") ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Membership
          </Link>
          <Link
            to="/contact"
            className={`${styles.navItem} ${
              isActive("/contact") ? styles.active : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default PublicNavbar;
