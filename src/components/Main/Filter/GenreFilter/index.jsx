import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const GenreFilter = ({ genres, action, active }) => {
  const [activeGenre, setActiveGenre] = useState(active || genres[0]);

  const onClick = (genre) => {
    action(genre);
    setActiveGenre(genre);
  };

  const className = (genre) => (genre === activeGenre ? 'active' : '');

  return (
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
