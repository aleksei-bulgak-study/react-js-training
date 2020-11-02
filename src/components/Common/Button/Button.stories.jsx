/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button, { types } from './Button';
import '../../../app.css';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

const options = {
  primary: types.PRIMARY,
  secondary: types.SECONDARY,
  additional: types.ADDITIONAL,
};

export const Default = () => (
  <Button
    title={text('Title', 'button title')}
    // eslint-disable-next-line no-alert
    onClick={() => alert('test message')}
    type={select('Type', options, types.PRIMARY)}
  />
);
