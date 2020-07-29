import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import './styles.css';

export default (preview) => (
  <header>
    <Wrapper>
      {preview && <PreviewMovie preview={preview} />}
      {!preview && <SearchBar />}
    </Wrapper>
  </header>
);
