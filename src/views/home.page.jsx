import React from 'react';
import { Header, Footer } from '../components';

export default ({ preview }) => (
  <>
    <Header preview={preview} />
    <Main></Main>
    <Footer />
  </>
);
