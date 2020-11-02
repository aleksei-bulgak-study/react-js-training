/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs';
import CloseButton from './CloseButton';
import '../../../app.css';

export default {
  title: 'CloseButton',
  decorators: [withKnobs],
};

const options = {
  small: 'small',
  large: 'large'
};

export const Default = () => (
  <CloseButton
    // eslint-disable-next-line no-alert
    onClick={() => alert('test message')}
    size={select('Size', options, options.small)}
  />
);
