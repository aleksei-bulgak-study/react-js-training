import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import PreviewMovie from '../Preview';
import SearchBar from '../SearchBar';
import BrandHeader from './Brand';
import './styles.css';

const Header = ({ preview }) => (
  <header>
    <Wrapper>
      <BrandHeader />
      {preview && <PreviewMovie preview={preview} />}
      {!preview && <SearchBar />}
    </Wrapper>
  </header>
);

Header.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
