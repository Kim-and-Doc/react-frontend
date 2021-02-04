import React from 'react';
import UserImgSm from '../hoc/UserImgSm';
import CreateComment from './CreateComment';

const CommentThread = ({
  children,
  username,
  commentContent,
  commentDate,
  upperStyleClass,
  image,
  altTxt,
  styleClass,
  usernameLink,
}) => {
  return (
    <div className="comment-section">
      <div className="comment-container">
        <UserImgSm
          upperStyleClass={upperStyleClass}
          image={image}
          altTxt={altTxt}
          styleClass={styleClass}
        />
        <div className="comment">
          <div className="comment-box">
            <a
              href={usernameLink ? usernameLink : '/404'}
              className="user-link w-inline-block"
            >
              <div className="comment-name header-font">{username}</div>
            </a>
            <div className="comment-text">{commentContent}</div>
          </div>
          <div className="comment-react">
            <button className="reply-comment">
              Reply{' '}
            </button>
            <div className="text-block-2">{commentDate}</div>
          </div>
        </div>
      </div>
      {/* Figure out how to display based on which reply button is pressed 
        
      <CreateComment /> */}
      <div className="replies">{children}</div>
    </div>
  );
};
export default CommentThread;
