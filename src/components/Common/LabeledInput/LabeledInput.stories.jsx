/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import LabeledInput from './LabeledInput';
import '../../../app.css';
import './LabeledInput.css';

export default {
  title: 'LabeledInput',
  decorators: [withKnobs],
};

const types = {
  text: 'text',
  number: 'number',
  date: 'date'
};

export const Default = () => (
  <LabeledInput
  id={text('id', 'default')}
  title={text('title', 'input title')}
  disabled={boolean('is disabled', false)}
  value={text('value', 'some text')}
  // eslint-disable-next-line no-console
  onChange={() => console.log('changed')}
  type={select('type', types, types.text)}
  name={text('name', 'some name')}
  error={text('validation error', 'invalid text specified')}
  />
);
