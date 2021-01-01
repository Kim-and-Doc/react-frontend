import React from 'react';
import Footer from '../components/hoc/Footer';
import Navbar from '../components/hoc/Navbar';
import useScript from '../utils/useScript.hook'

const NotFound = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609013151/portfolio/js/snf-webflow_rnkr6i.js',
  );
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
      <Footer />
    </div>
  );
};
export default NotFound;
