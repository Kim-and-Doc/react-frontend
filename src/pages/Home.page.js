import React, { useState, useEffect } from 'react';
import Navbar from '../components/hoc/Navbar';
import HomeSideLeft from '../components/sidebar/HomeSideLeft';
import HomeSideRight from '../components/sidebar/HomeSideRight';
import useScript from '../utils/useScript.hook';
import CreatePost from '../components/post/CreatePost';
import SNSPost from '../components/post/SNSPost';
import Footer from '../components/hoc/Footer';
import PopupForm from '../components/hoc/PopupPostForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useAxios from '../utils/useAxios.hook';

const Home = ({ isOpen }) => {
  const [posts, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (posts) {
      setLoading(false);
      // replace loading === true with PageLoader
    }
  }, [posts]);
  useAxios('http://localhost:5000/api/dummy/post', setPost);
  useScript(
    'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a',
  );
  useScript(
    'https://res.cloudinary.com/hsse18xji/raw/upload/v1609606257/SNF/js/webflow_tdaogu.js',
  );

  const tempOwner = {
    postId: 1,
    firstName: 'Sooeun',
    lastName: 'Kim',
    picture:
      'https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg',
  };
  return (
    <div className="flex-body">
      {isOpen ? <PopupForm /> : null}

      <Navbar type="sns" />
      <HomeSideLeft />
      <HomeSideRight />
      <div className="profile-container home-container">
        <div className="profile-content">
          <div className="divider" />
          <CreatePost />
          <div className="divider" />

          {!loading ? (
            posts.data.data.map(
              ({ id, image, likes, publishDate, owner, text }) => (
                <div key={id}>
                  <SNSPost
                    id={id}
                    image={image}
                    likes={likes}
                    publishDate={publishDate}
                    owner={owner}
                    text={text}
                  />
                  <div className="divider" />
                </div>
              ),
            )
          ) : (
            <div>
              <SNSPost
                id="1"
                image="https://images7.alphacoders.com/465/thumb-1920-465099.jpg"
                likes="69"
                publishDate="2020-02-06"
                owner={tempOwner}
                text="exmaple of post text"
              />
              <div className="divider" />
            </div>
          )}
        </div>
        <div className="main-content-area-post-list">
          <Footer type="sns" />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpen: state.popup.isOpen,
});

export default connect(mapStateToProps, {})(Home);
