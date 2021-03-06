import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button, { types } from '../Common/Button';

const SearchBar = ({ filterByName, onFilterByName, onFilmAdd }) => {
  const [searchString, setSearchString] = useState(filterByName);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onFilterByName(searchString);
    }
  };

  const onSearch = useCallback(() => onFilterByName(searchString), [
    searchString,
    onFilterByName,
  ]);

  return (
    <div className="search-bar">
      <label htmlFor="search-bar__input" className="search-bar__title">
        Find your movie
        <div className="search-bar__controls">
          <input
            id="search-bar__input"
            className="search-bar__input"
            type="text"
            placeholder="What do you want to watch?"
            value={searchString}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <Button title="Search" onClick={onSearch} />
          <Button
            title="+ Add movie"
            type={types.ADDITIONAL}
            className="search-bar__add-movie"
            onClick={onFilmAdd}
          />
        </div>
      </label>
    </div>
  );
};

SearchBar.propTypes = {
  filterByName: PropTypes.string,
  onFilterByName: PropTypes.func.isRequired,
  onFilmAdd: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  filterByName: '',
};

export default SearchBar;
