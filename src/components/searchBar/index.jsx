import React from 'react';
import './styles.css';

export default () => (
  <div className="search-bar">
    <label htmlFor="search-bar__input" className="search-bar__title">
      Find your movie
      <div className="search-bar__controls">
        <input
          id="search-bar__input"
          className="search-bar__input"
          type="text"
          placeholder="What do you want to watch?"
        />
        <button type="button" className="search-bar__search">
          Search
        </button>
        <button type="button" className="search-bar__add-movie">
          + Add movie
        </button>
      </div>
    </label>
  </div>
);
