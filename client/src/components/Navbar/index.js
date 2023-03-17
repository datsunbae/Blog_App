import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.scss";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          DATSUNBAE BLOG
        </Link>
      </div>
      <div className="navbar-wrapper-navigate">
        <ul className="navbar-list">
          <li className="navbar-list__item">
            <Link to="/" className="navbar-list__item-link">
              Blog
            </Link>
          </li>
          <li className="navbar-list__item">
            <Link to="/about" className="navbar-list__item-link">
              About
            </Link>
          </li>
          <li className="navbar-list__item">
            <Link to="/contact" className="navbar-list__item-link">
              Contact
            </Link>
          </li>
          <li className="navbar-list__item">
            {currentUser ? (
              <>
                <span className="navbar-list__item-link">
                  Hi,{currentUser?.username}!
                </span>

                <span className="navbar-list__item-link item-logout" onClick={logout}>
                  Logout
                </span>
              </>
            ) : (
              <Link to="/login" className="navbar-list__item-link">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
