import React from 'react';

const AuthTab = ({ tab, cName, content }) => {
  return (
    <button data-w-tab={tab} className={cName}>
      <div>{content}</div>
    </button>
  );
};
export default AuthTab;
