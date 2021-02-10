import React from 'react';
import { PacmanLoader } from 'react-spinners';

const PageLoader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <PacmanLoader
          loading
          size={50}
          margin={2}
          color="black"
        />
      </div>
    </div>
  );
};

export default PageLoader;