import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import PreviewMovie from '../Preview';
import SearchBar from '../SearchBar';
import './styles.css';

const TopSection = ({ preview, filterByName, blur, addFilmAction }) => (
  <section className={blur ? 'search-preview blured' : 'search-preview'}>
    <ErrorBoundary>
      <Wrapper>
        {preview && <PreviewMovie preview={preview} />}
        {!preview && (
          <SearchBar
            filterByName={filterByName}
            addFilmAction={addFilmAction}
          />
        )}
      </Wrapper>
    </ErrorBoundary>
  </section>
);

TopSection.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }).isRequired,
  blur: PropTypes.bool.isRequired,
  filterByName: PropTypes.func.isRequired,
  addFilmAction: PropTypes.func.isRequired,
};

export default TopSection;
