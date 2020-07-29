import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../wrapper';
import PreviewMovie from '../preview';
import SearchBar from '../searchBar';
import BrandHeader from './brand';
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
