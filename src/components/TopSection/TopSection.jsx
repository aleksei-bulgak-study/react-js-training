import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import PreviewMovie from '../Preview';
import SearchBar from '../SearchBar';
import { closeFilmPreview } from '../../actions/film';
import { filterByQuery } from '../../actions/filter';
import { openModalWindow, modalTypes } from '../../actions/common';

import './styles.css';

const buildClassNameString = (preview, active) => {
  const classes = ['search-preview'];
  classes.push(preview ? ['preview'] : ['search']);
  classes.push(active ? '' : 'blured');
  return classes.join(' ');
};

const TopSection = ({
  active,
  preview,
  searchString,
  onSearchString,
  onFilmAdd,
  onPreviewClose,
}) => {
  const className = useMemo(() => buildClassNameString(preview, active), [preview, active]);

  return (
    <section className={className}>
      <ErrorBoundary>
        <Wrapper>
          {preview && (
            <PreviewMovie preview={preview} onPreviewClose={onPreviewClose} />
          )}
          {!preview && (
            <SearchBar
              filterByName={searchString}
              onFilterByName={onSearchString}
              onFilmAdd={onFilmAdd}
            />
          )}
        </Wrapper>
      </ErrorBoundary>
    </section>
  );
};

TopSection.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  active: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  onFilmAdd: PropTypes.func.isRequired,
  onPreviewClose: PropTypes.func.isRequired,
  onSearchString: PropTypes.func.isRequired,
};

TopSection.defaultProps = {
  preview: null,
};

const mapStateToProps = (state) => ({
  preview: state.films.preview,
  searchString: state.filters.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchString: (query) => dispatch(filterByQuery(query)),
  onPreviewClose: () => dispatch(closeFilmPreview()),
  onFilmAdd: () => dispatch(openModalWindow(modalTypes.ADD_FILM)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
