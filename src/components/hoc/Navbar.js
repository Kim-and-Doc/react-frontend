import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      role="banner"
      className="nav-snf w-nav"
    >
      <div className="nav-container w-container">
        <div className="nav-hamburger w-nav-button">
          <div className="icon-2 w-icon-nav-menu"></div>
        </div>
        <div className="nav-content">
          <Link to="/" className="brand w-nav-brand">
            <div className="nav-logo-txt">SNF</div>
          </Link>
          <form action="/search" className="text-input nav-search w-form">
            <input
              type="search"
              className="search-input nav-search nav-searcher w-input"
              maxLength="256"
              name="query"
              placeholder="Search"
              id="search"
              required=""
            />
            <input
              type="submit"
              value="Search"
              className="input-submit w-button"
            />
          </form>
          <nav role="navigation" className="nav-links w-nav-menu">
            <Link to="/" className="nav-link w-nav-link">
              <i className="fas fa-home" />
            </Link>
            <Link to="/404" className="nav-link w-nav-link">
              <i className="fab fa-facebook-messenger" />
            </Link>
            <Link to="/food-community/main" className="nav-link w-nav-link">
              <i className="fas fa-utensils" />
            </Link>
            <Link to="/profile/me" className="nav-link w-nav-link">
              <i className="fas fa-user-circle" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
