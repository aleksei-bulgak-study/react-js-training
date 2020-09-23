import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import qs from 'qs';
import SearchBar from './SearchBar';
import { filterActions, filmActions, commonActions } from '../../store/actions';

const SearchBarContainer = ({
  searchString,
  onFilmAdd,
  onSearchString,
  onEmptySearch,
}) => {
  const history = useHistory();

  const searchStringValue = useMemo(() => {
    if (searchString) {
      return searchString;
    }
    if (history.location.search) {
      const searchQuery = qs.parse(history.location.search, {
        ignoreQueryPrefix: true,
      }).query;
      onSearchString(searchQuery);
      return searchQuery;
    }

    onEmptySearch();
    return '';
  }, [searchString, history.location.search, onEmptySearch]);

  const onSearch = useCallback(
    (data) => {
      history.push(`/search?query=${data}`);
      onSearchString(data);
    },
    [history, onSearchString],
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
  searchString: PropTypes.string,
  onFilmAdd: PropTypes.func.isRequired,
  onSearchString: PropTypes.func.isRequired,
  onEmptySearch: PropTypes.func.isRequired,
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
  onFilmAdd: () =>
    dispatch(commonActions.openModalWindow(commonActions.types.ADD_FILM)),
  onEmptySearch: () => dispatch(commonActions.loader(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
