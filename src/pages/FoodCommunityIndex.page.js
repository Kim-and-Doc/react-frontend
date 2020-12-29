import React from 'react';
import Navbar from '../components/hoc/Navbar';
import FCPostThumbnail from '../components/FoodCommunityPostThumbnail';
import FCSideBar from '../components/FoodCommunitySideBar';
import Footer from '../components/hoc/Footer';
import useScript from '../utils/useScript.hook';
// import '../FoodCommunity-Chat.css'
// import '../App.css'

const FoodCommunityIndex = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5fa8117aabbd5e54dba895c2',
  );
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609013151/portfolio/js/snf-webflow_rnkr6i.js',
  );

  return (
    <div className="body">
    <Navbar />
      
      <div className="main-content-area">
        <div className="main-content-area-post-list">
          <FCSideBar />
          <div className="w-layout-grid main-content-left-grid">
            <FCPostThumbnail />
          </div>          
          <Footer />
        </div>
      </div>
    </div>
  );
};
      
export default FoodCommunityIndex;