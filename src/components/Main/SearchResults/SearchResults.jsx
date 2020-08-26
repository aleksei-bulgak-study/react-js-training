import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmResults from '../FilmResults';
import NotFound from '../NotFound';

import './styles.css';

const SearchResults = ({ filmsCount }) => (
  <>
    {filmsCount && <FilmResults />}
    {!filmsCount && <NotFound />}
  </>
);

SearchResults.propTypes = {
  filmsCount: PropTypes.number,
};

SearchResults.defaultProps = {
  filmsCount: 0,
};

const mapStateToProps = (state) => ({
  filmsCount: state.films.filteredResults.length || 0,
});

export default connect(mapStateToProps)(SearchResults);
