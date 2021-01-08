import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAlerts } from '../../redux/alert/alert.actions';

const Navbar = ({ clearAlerts, alerts, type }) => {
  useEffect(() => {
    if (alerts.length > 0) {
      clearAlerts();
    }
  }, [clearAlerts, alerts.length]);

  const navLinkClass =
    type === 'food' ? 'nav-link-food w-nav-link-food' : 'nav-link w-nav-link';

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
          <a href="/" className="brand w-nav-brand">
            <div
              className={type === 'food' ? 'nav-logo-txt-food' : 'nav-logo-txt'}
            >
              SNF
            </div>
          </a>
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
            <a href="/" className={navLinkClass}>
              <i className="fas fa-home" />
            </a>
            <a href="/404" className={navLinkClass}>
              <i className="fab fa-facebook-messenger" />
            </a>
            <a href="/food-community/main" className={navLinkClass}>
              <i className="fas fa-utensils" />
            </a>
            <a href="/profile/me" className={navLinkClass}>
              <i className="fas fa-user-circle" />
            </a>
            <a href="/auth" className={navLinkClass}>
              <i className="fas fa-sign-out-alt" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  clearAlerts: PropTypes.func.isRequired,
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alerts,
});
export default connect(mapStateToProps, { clearAlerts })(Navbar);
