import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './GenreFilter.css';

const GenreFilter = ({ genres, action, active }) => {
  const [activeGenre, setActiveGenre] = useState(active || genres[0]);

  const onClick =useCallback((genre) => {
    action(genre);
    setActiveGenre(genre);
  }, [action]);

  const onSelect = useCallback(
    (event) => {
      const { value } = event.target;
      action(value);
      setActiveGenre(value);
    },
    [action, setActiveGenre],
  );

  const className = useCallback(
    (genre) => (genre === activeGenre ? 'active' : ''),
    [activeGenre],
  );

  const select = (
    <select
      id="genre-filter"
      className="genre-filter"
      onChange={onSelect}
      value={activeGenre}
    >
      {genres.map((option) => (
        <option key={option} className="genre-filter__item" value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const list = (
    <ul className="genre-filter">
      {genres.map((genre) => (
        <li key={genre} className="genre-filter__item">
          <button
            type="button"
            onClick={() => onClick(genre)}
            className={className(genre)}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {genres.length <= 6 && list}
      {genres.length > 6 && select}
    </>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.string,
};

GenreFilter.defaultProps = {
  active: null,
};

export default GenreFilter;
