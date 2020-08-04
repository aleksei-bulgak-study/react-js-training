import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';
import PreviewMovie from '../Preview';
import SearchBar from '../SearchBar';
import './styles.css';

const TopSection = ({ preview }) => (
  <section className="search-preview">
    <ErrorBoundary>
      <Wrapper>
        {preview && <PreviewMovie preview={preview} />}
        {!preview && <SearchBar />}
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
};

export default TopSection;
