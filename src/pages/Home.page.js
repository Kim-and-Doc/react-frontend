import React from 'react';
import Navbar from '../components/Navbar'
import useScript from '../utils/useScript.hook'

const Home = () => {
  useScript('https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5f87b4cc20eddf4260bad35a');
  useScript('https://res.cloudinary.com/hsse18xji/raw/upload/v1609013151/portfolio/js/snf-webflow_rnkr6i.js');
  return (
    <div className="flex-body">
      <Navbar/>
      <div className="home-profile-side left">
        <div className="divider"></div>
        <div className="setting-container">
          <a href="#" className="profile-side-btn w-button">
            <span className="text-span-2"></span> My Profile
          </a>
        </div>
        <div className="divider"></div>
        <div className="setting-container">
          <a href="#" className="profile-side-btn w-button">
            <span className="text-span-2"></span> Food Posts
          </a>
        </div>
        <div className="divider"></div>
        <div className="setting-container">
          <a href="#" className="profile-side-btn w-button">
            <span className="text-span-2"></span> Photos/Videos
          </a>
        </div>
        <div className="divider"></div>
      </div>
      <div className="home-profile-side right">
        <div className="divider"></div>
        <div className="profile-info-container notif-container">
          <div className="profile-info">
            <h4 className="header-font notif-header">Notifications</h4>
            <div className="notification">
              <div className="profile-img-div profile-small notif-image">
                <img
                  src="images/suzy.jpg"
                  loading="lazy"
                  alt=""
                  className="profile-image"
                />
              </div>
              <div className="notif-content">
                <div className="notif">
                  This is some text inside of a div block.
                </div>
                <div className="notif-time">3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-content">
          <div className="divider"></div>
          <div className="create-post">
            <div className="post-component create-post">
              <div className="picture-post">
                <div className="profile-img-div profile-small">
                  <img
                    src="images/suzy.jpg"
                    loading="lazy"
                    alt=""
                    className="profile-image"
                  />
                </div>
                <h3 className="heading header-font">Create A Post</h3>
                <div className="create-btn">
                  <a
                    href="#"
                    className="create-post selected clear-button w-button"
                  >
                    SNS Post
                  </a>
                  <a
                    href="#"
                    className="create-post clear-button food-btn w-button"
                  >
                    Food Post
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="post">
            <div className="post-component post">
              <div className="picture-details">
                <div className="profile-img-div profile-small">
                  <img
                    src="images/suzy.jpg"
                    loading="lazy"
                    alt=""
                    className="profile-image"
                  />
                </div>
                <div className="post-details">
                  <div className="post-name">
                    <strong className="bold-text header-font">
                      Sooeun Kim
                    </strong>
                  </div>
                  <div className="post-date">October 28, 2020</div>
                </div>
                <div className="post-settings">
                  <div data-hover="" data-delay="0" className="w-dropdown">
                    <div className="post-dropdown w-dropdown-toggle">
                      <div className="w-icon-dropdown-toggle"></div>
                    </div>
                    <nav className="w-dropdown-list">
                      <a href="#" className="dropdown-post w-dropdown-link">
                        Edit
                      </a>
                      <a href="#" className="dropdown-post w-dropdown-link">
                        Delete
                      </a>
                      <a href="#" className="dropdown-post w-dropdown-link">
                        Link 3
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="hr"></div>
              <div className="post-text">
                THis
                <br />
                is
                <br />
                where the text
                <br />
                goes.‍
                <br />
                This‍
              </div>
              <div className="post-media">
                <img
                  src="images/suzy.jpg"
                  loading="lazy"
                  alt=""
                  className="post-imgage"
                />
              </div>
              <div className="post-count">
                <div className="like-count">Likes 69</div>
                <div className="count-spacer"> </div>
                <div className="comment-count">69 Comments</div>
              </div>
              <div className="hr"></div>
              <div className="post-react">
                <a href="#" className="clear-button post-interaction w-button">
                  <span className="icons"></span> <br />
                  Like
                </a>
                <a href="#" className="clear-button post-interaction w-button">
                  <span className="icons"></span> <br />
                  Comment
                </a>
                <a href="#" className="clear-button post-interaction w-button">
                  <span className="icons"></span> <br />
                  Share
                </a>
              </div>
              <div className="hr"></div>
              <div className="comment-section">
                <div className="comment-container">
                  <div className="profile-img-div profile-small comment-pic">
                    <img
                      src="images/suzy.jpg"
                      loading="lazy"
                      alt=""
                      className="profile-image"
                    />
                  </div>
                  <div className="comment">
                    <div className="comment-box">
                      <div className="comment-name header-font">Sooeun Kim</div>
                      <div className="comment-text">
                        Basic commentasdf df asdfasd fadsfad
                        fadsfasdfasdfadsfdsfdasfdsfasdfdasfkl jknknjnjnk knkjnj
                        knk kjnkjn njlkklklkmkllkklmklmkl kmlkmlmklmlkmlkm
                        klmlkmlmkmlkmlkmlk mlkmlmmlkmlkml lmlmlkmlkmlkmlkmlmlmm
                        lkmlkmlmlkm
                      </div>
                    </div>
                    <div className="comment-react">
                      <a href="#" className="like-comment">
                        Like{' '}
                      </a>
                      <a href="#" className="reply-comment">
                        Reply{' '}
                      </a>
                      <div className="text-block-2">mm-dd-yyyy</div>
                    </div>
                  </div>
                </div>
                <div className="replies">
                  <div className="comment-section">
                    <div className="comment-container">
                      <div className="profile-img-div profile-small comment-pic">
                        <img
                          src="images/suzy.jpg"
                          loading="lazy"
                          alt=""
                          className="profile-image"
                        />
                      </div>
                      <div className="comment">
                        <div className="comment-box">
                          <div className="comment-name header-font">
                            Sooeun Kim
                          </div>
                          <div className="comment-text">Basic comment</div>
                        </div>
                        <div className="comment-react">
                          <a href="#" className="like-comment">
                            Like{' '}
                          </a>
                          <a href="#" className="reply-comment">
                            Reply{' '}
                          </a>
                          <div className="text-block-2">mm-dd-yyyy</div>
                        </div>
                      </div>
                    </div>
                    <div className="replies">
                      <div className="comment-container">
                        <div className="profile-img-div profile-small comment-pic">
                          <img
                            src="images/suzy.jpg"
                            loading="lazy"
                            alt=""
                            className="profile-image"
                          />
                        </div>
                        <div className="comment">
                          <div className="comment-box">
                            <div className="comment-name header-font">
                              Sooeun Kim
                            </div>
                            <div className="comment-text">Basic reply</div>
                          </div>
                          <div className="comment-react">
                            <a href="#" className="like-comment">
                              Like{' '}
                            </a>
                            <a href="#" className="reply-comment">
                              Reply{' '}
                            </a>
                            <div className="text-block-2">mm-dd-yyyy</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture-post create-comment">
                <div className="profile-img-div profile-small">
                  <img
                    src="images/suzy.jpg"
                    loading="lazy"
                    alt=""
                    className="profile-image"
                  />
                </div>
                <form action="/search" className="text-input post-input w-form">
                  <input
                    type="search"
                    className="search-input nav-search comment-field w-input"
                    maxLength="256"
                    name="query"
                    placeholder="Write a comment..."
                    id="search"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="input-submit w-button"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
        <div className="footer">
          <h3>Footer</h3>
        </div>
      </div>
    </div>
  );
};
export default Home;
