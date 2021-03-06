import React from 'react';
import Navbar from '../components/hoc/Navbar';
import FCPostThumbnail from '../components/post/FoodCommunityPostThumbnail';
import FCSideBar from '../components/sidebar/FoodCommunitySideBar';
import FCSearchBar from '../components/hoc/FoodCommunitySearchBar';
import Footer from '../components/hoc/Footer';
import useScript from '../utils/useScript.hook';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PopupForm from '../components/hoc/PopupPostForm';

const FoodCommunityIndex = ({ isOpen }) => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa8117aabbd5e54dba895c2',
  );
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );

  return (
    <div className="body">
      {isOpen ? (
          <PopupForm cName="popup-bg popup-outisde-flex-box" />
      ) : null}
      <Navbar type="food" />
      <div className="main-content-area">
        <div className="main-content-area-post-list">
          <FCSideBar />
          <FCSearchBar />
          <div className="w-layout-grid main-content-left-grid">
            <FCPostThumbnail />
            <FCPostThumbnail />
            <FCPostThumbnail />
          </div>
          <Footer type="food" />
        </div>
      </div>
    </div>
  );
};

FoodCommunityIndex.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.popup.isOpen,
});
export default connect(mapStateToProps, {})(FoodCommunityIndex);
