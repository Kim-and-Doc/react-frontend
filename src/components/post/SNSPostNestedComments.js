import React from 'react';
import CommentThread from './CommentThread';
import UserImgSm from '../hoc/UserImgSm';
import PostSettings from './PostSettings';
import CreateComment from './CreateComment';

const SNSPost = ({postId, image, likes, owner, publishDate,text}) => {
  const {id,firstName, lastName,picture} = owner;
  // make a link for comments in our api

  return (
    <div className="post">
      <div className="post-component post">
        <div className="picture-details">
          <UserImgSm
            upperStyleClass="profile-img-div profile-small"
            image={picture}
            altTxt="User Icon"
            styleClass="profile-image"
          />
          <div className="post-details">
            <a href="/404" className="user-link w-inline-block">
              <div className="post-name">
                <strong className="bold-text header-font">{`${firstName} ${lastName}`}</strong>
              </div>
            </a>
            <div className="post-date">{publishDate}</div>
          </div>
          <PostSettings />
        </div>
        <div className="hr"></div>
        <div className="post-text">
          {text}
        </div>
        <div
          className="post-media"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="post-count">
          <div className="like-count">Likes {likes}</div>
          <div className="count-spacer"> </div>
          <div className="comment-count">69 Comments</div>
        </div>
        <div className="hr"></div>
        <div className="post-react">
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-thumbs-up" />
            <br />
            Like
          </button>
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-comment" />
            <br />
            Comment
          </button>
          <button className="clear-button post-interaction w-button">
            <i className="fas fa-share" />
            <br />
            Share
          </button>
        </div>
        <div className="hr"></div>
        <CommentThread
          upperStyleClass="profile-img-div profile-small comment-pic"
          image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
          altTxt="User Icon"
          styleClass="profile-image"
          username="Sooeun Kim"
          commentContent="Basic commentasdf df asdfasd fadsfad
                  fadsfasdfasdfadsfdsfdasfdsfasdfdasfkl jknknjnjnk knkjnj knk
                  kjnkjn njlkklklkmkllkklmklmkl kmlkmlmklmlkmlkm
                  klmlkmlmkmlkmlkmlk mlkmlmmlkmlkml lmlmlkmlkmlkmlkmlmlmm
                  lkmlkmlmlkm"
          commentDate="mm-dd-yyyy"
        >
          <CommentThread
            upperStyleClass="profile-img-div profile-small comment-pic"
            image="https://www.thefamouspeople.com/profiles/images/bae-suzy-2.jpg"
            altTxt="User Icon"
            styleClass="profile-image"
            username="Suzy Bae"
            commentContent="I am replying"
            commentDate="mm-dd-yyyy"
          >
            <CommentThread
              upperStyleClass="profile-img-div profile-small comment-pic"
              image="https://m.media-amazon.com/images/M/MV5BMWRkMjMxMjEtZTZiYi00OTIwLWFhNmMtOWFiZTU1NDc3OGJlXkEyXkFqcGdeQXVyMjIyNzU0OA@@._V1_.jpg"
              altTxt="User Icon"
              styleClass="profile-image"
              username="Sooeun Kim"
              commentContent="Basic commentasdf df asdfasd fadsfad
                  fadsfasdfasdfadsfdsfdasfdsfasdfdasfkl jknknjnjnk knkjnj knk
                  kjnkjn njlkklklkmkllkklmklmkl kmlkmlmklmlkmlkm
                  klmlkmlmkmlkmlkmlk mlkmlmmlkmlkml lmlmlkmlkmlkmlkmlmlmm
                  lkmlkmlmlkm"
              commentDate="mm-dd-yyyy"
            ></CommentThread>
          </CommentThread>
        </CommentThread>
        <CreateComment />
      </div>
    </div>
  );
};
export default SNSPost;
