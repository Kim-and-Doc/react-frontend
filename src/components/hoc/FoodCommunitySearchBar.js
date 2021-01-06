import React from 'react';

const FoodCommunitySearchBar = () => {
  return (
    <div className="main-content-search-bar-area">
        <div className="main-content-search-bar">
          <form action="/search" className="main-content-search-bar w-form"><input type="search" className="main-content-search-bar-text-field w-input" maxlength="256" name="query" placeholder="Search for any post" id="search" required="" /><input type="submit" value="Search" className="main-content-search-bar-search-button w-button" /></form>
        </div>
      </div>
  );
};

export default FoodCommunitySearchBar;