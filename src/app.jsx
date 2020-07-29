import React from 'react';
import {
  FunctionalComponent,
  CreateElementComponent,
  ClassComponent,
  PureClassComponent,
} from './components';
import './styles.css';

export default () => (
  <>
    <FunctionalComponent />
    <CreateElementComponent />
    <ClassComponent />
    <PureClassComponent />
  </>
);
