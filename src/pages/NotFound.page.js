import React from 'react';
import Navbar from '../components/hoc/Navbar';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
          <img
            src="https://d3e54v103j8qbb.cloudfront.net/static/page-not-found.211a85e40c.svg"
            alt="Not Found"
          />
          <h2>Page Not Found</h2>
          <div>
            The page you are looking for doesn&#x27;t exist or has been moved.
          </div>
          <a href="/" className="profile-side-btn w-button">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
