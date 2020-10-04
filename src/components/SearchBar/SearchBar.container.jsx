import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import qs from 'qs';
import SearchBar from './SearchBar';
import { filterActions, filmActions, commonActions } from '../../store/actions';

const SearchBarContainer = ({
  onFilmAdd,
  onSearchString,
  onEmptySearch,
  onFilterByName,
}) => {
  const history = useHistory();
  const location = useLocation();

  const searchStringValue = useMemo(() => {
    if (location.search) {
      const searchQuery = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      }).query;
      onSearchString(searchQuery);
      return searchQuery;
    }

    onEmptySearch();
    return '';
  }, [onSearchString, location, onEmptySearch]);

  const onSearch = useCallback(
    (data) => {
      history.push(`/search?query=${data}`);
      onFilterByName(data);
    },
    [history, onFilterByName],
  );

  return (
    <SearchBar
      filterByName={searchStringValue}
      onFilmAdd={onFilmAdd}
      onFilterByName={onSearch}
    />
  );
};

SearchBarContainer.propTypes = {
  onFilmAdd: PropTypes.func.isRequired,
  onSearchString: PropTypes.func.isRequired,
  onEmptySearch: PropTypes.func.isRequired,
  onFilterByName: PropTypes.func.isRequired,
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
