import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import SearchBar from './SearchBar';
import { filterActions, filmActions, commonActions } from '../../store/actions';

const SearchBarContainer = ({
  searchString,
  onFilmAdd,
  onSearchString,
}) => {
  const history = useHistory();

  const onSearch = useCallback((data) => {
    history.push(`/search?query=${data}`);
    onSearchString(data);
  }, [history, onSearchString]);

  return (
  <SearchBar
    filterByName={searchString}
    onFilmAdd={onFilmAdd}
    onFilterByName={onSearch}
  />
)};

SearchBarContainer.propTypes = {
  searchString: PropTypes.string,
  onFilmAdd: PropTypes.func.isRequired,
  onSearchString: PropTypes.func.isRequired,
};

SearchBarContainer.defaultProps = {
  searchString: '',
};

const mapDispatchToProps = (dispatch) => ({
  onSearchString: (query) => {
    dispatch(filterActions.filterByQuery(query));
    dispatch(filmActions.renewedFilmsSearch());
  },
  onFilmAdd: () =>
    dispatch(commonActions.openModalWindow(commonActions.types.ADD_FILM)),
});

export default connect(null, mapDispatchToProps)(SearchBarContainer);
