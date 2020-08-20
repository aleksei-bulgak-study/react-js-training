import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import PreviewMovie from '../Preview';
import SearchBar from '../SearchBar';
import './styles.css';

const buildClassNameString = (preview, blur) => {
  const classes = ['search-preview'];
  classes.push(preview ? ['preview'] : ['search']);
  classes.push(blur ? 'blured' : '');
  return classes.join(' ');
};

const TopSection = ({
  preview,
  filterByName,
  onFilterByName,
  blur,
  onFilmAdd,
  onPreviewClose,
}) => {
  const className = buildClassNameString(preview, blur);

  return (
    <section className={className}>
      <ErrorBoundary>
        <Wrapper>
          {preview && (
            <PreviewMovie
              preview={preview}
              onPreviewClose={onPreviewClose}
            />
          )}
          {!preview && (
            <SearchBar
              filterByName={filterByName}
              onFilterByName={onFilterByName}
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
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }),
  blur: PropTypes.bool.isRequired,
  filterByName: PropTypes.string,
  onFilterByName: PropTypes.func.isRequired,
  onFilmAdd: PropTypes.func.isRequired,
  onPreviewClose: PropTypes.func.isRequired,
};

TopSection.defaultProps = {
  preview: null,
  filterByName: '',
};

export default TopSection;
