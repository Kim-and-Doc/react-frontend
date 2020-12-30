import React from 'react';
import Navbar from '../components/hoc/Navbar';
import HomeSideLeft from '../components/sidebar/HomeSideLeft'
import HomeSideRight from '../components/sidebar/HomeSideRight'
import useScript from '../utils/useScript.hook';
import CreatePost from '../components/post/CreatePost';
import SNSPost from '../components/post/SNSPost';
// import '../App.css'
import Footer from '../components/hoc/Footer';

const Home = () => {
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609013151/portfolio/js/snf-webflow_rnkr6i.js',
  );
  // ! Add Redux, SNSPost, Links, Notifs, CommentThread
  return (
    <div className="flex-body">
      <Navbar />
      <HomeSideLeft />
      <HomeSideRight />
      <div className="profile-container">
        <div className="profile-content">
          <div className="divider"/>
          <CreatePost />
          <div className="divider"/>
          <SNSPost />
          <div className="divider"/>
        </div>
        <div className="main-content-area-post-list">
        <Footer />
</div>
      </div>
    </div>
  );
};
export default Home;
