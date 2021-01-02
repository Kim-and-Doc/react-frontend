import React from 'react';

const PopupForm = () => {
  return (
    <div className="popup-bg">
      <div className="popup">
        <div className="popup-header">
          <h3 className="heading-2">Create Post</h3>
          <a href="/404" className="close-x w-button">
            <strong>X</strong>
          </a>
        </div>
        <div className="hr"></div>
        <div className="popup-input">
          <div className="popup-form-block">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className="popup-form"
            >
              <textarea
                placeholder="What&#x27;s on your mind, Suzy?"
                maxLength="5000"
                id="post"
                name="post"
                required=""
                data-name="post"
                className="popup-textarea w-input"
              ></textarea>
              <input
                type="file"
                className="popup-file-upload"
                maxLength="256"
                name="file"
              />
              <input
                type="submit"
                value="Post"
                className="post-btn w-button"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupForm;
