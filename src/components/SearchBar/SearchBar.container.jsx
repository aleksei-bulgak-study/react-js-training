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
  onFilterByName,
}) => {
  const history = useHistory();

  const onSearch = useCallback(
    (data) => {
      onSearchString(data);
      history.push(`/search?query=${data}`);
      onFilterByName(data);
    },
    [history, onFilterByName, onSearchString],
  );

  return (
    <SearchBar
      filterByName={searchString}
      onFilmAdd={onFilmAdd}
      onFilterByName={onSearch}
    />
  );
};

SearchBarContainer.propTypes = {
  searchString: PropTypes.string,
  onFilmAdd: PropTypes.func.isRequired,
  onSearchString: PropTypes.func.isRequired,
  onFilterByName: PropTypes.func.isRequired,
};

SearchBarContainer.defaultProps = {
  searchString: '',
};

const mapStateToProps = (state) => ({
  searchString: state.filters.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchString: (query) => {
    dispatch(filterActions.filterByQuery(query));
    dispatch(filmActions.renewedFilmsSearch());
  },
  onFilterByName: (query) => dispatch(filterActions.filterByQuery(query)),
  onFilmAdd: () =>
    dispatch(commonActions.openModalWindow(commonActions.types.ADD_FILM)),
  onEmptySearch: () => dispatch(commonActions.loader(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
