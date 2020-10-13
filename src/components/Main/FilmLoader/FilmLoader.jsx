import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LinkButton from '../../Common/LinkButton';
import { filmActions } from '../../../store/actions';

import './FilmLoader.css';

const FilmLoader = ({ loadFilms }) => {
  const onLoadFilms = useCallback(() => loadFilms(), [loadFilms]);

  return (
    <div className="film-loader">
      <LinkButton title="Load more" onClick={onLoadFilms} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(filmActions.loadFilms()),
});

FilmLoader.propTypes = {
  loadFilms: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilmLoader);
