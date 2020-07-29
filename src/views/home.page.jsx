import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Main } from '../components';

const Home = ({ preview, results }) => (
  <>
    <Header preview={preview} />
    <Main searchResults={results} />
    <Footer />
  </>
);

Home.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }),

  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }),
  ),
};

Home.defaultProps = {
  preview: null,
  results: [],
};

export default Home;
