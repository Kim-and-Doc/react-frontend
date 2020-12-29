import React from 'react';

const SNSButton = ({ route, styleClass, buttonText, icon }) => {
  return (
    <a href={route} className={styleClass}>
      {icon ? <i className={icon} /> : null} {buttonText}
    </a>
  );
};
export default SNSButton;
