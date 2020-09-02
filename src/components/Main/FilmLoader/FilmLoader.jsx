import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filmActions } from '../../../store/actions';

const options = {
  rootMargin: '100px',
  threshold: 0,
};

const FilmLoader = ({ loadFilms }) => {
  const loaderRef = useRef();
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      () => loadFilms(),
      options,
    );
    intersectionObserver.observe(loaderRef.current);
  }, [loaderRef, loadFilms]);

  return <div ref={loaderRef} className="film-loader" />;
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(filmActions.loadFilms()),
});

FilmLoader.propTypes = {
  loadFilms: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilmLoader);
