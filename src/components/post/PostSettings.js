import React from 'react';

const PostSettings = () => {
  return (
    <div className="post-settings">
      <div data-hover="" data-delay="0" className="w-dropdown">
        <div className="post-dropdown w-dropdown-toggle">
          <i className="fas fa-ellipsis-v" />
        </div>
        <nav className="w-dropdown-list">
          <a href="/404" className="dropdown-post w-dropdown-link">
            Edit
          </a>
          <a href="/404" className="dropdown-post w-dropdown-link">
            Delete
          </a>
          <a href="/404" className="dropdown-post w-dropdown-link">
            Link 3
          </a>
        </nav>
      </div>
    </div>
  );
};
export default PostSettings;
