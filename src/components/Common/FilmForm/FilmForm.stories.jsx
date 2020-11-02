/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  withKnobs,
  text,
  number,
  object,
} from '@storybook/addon-knobs';
import FilmForm from './FilmForm';
import '../../../app.css';

export default {
  title: 'Form',
  decorators: [withKnobs],
};

const intialState = {
  id: number('Film Id', 1, { min: 1 }),
  title: `${text('Title', 'Test film title')}`,
  poster_path: `${text('Poster url', 'https://example.com')}`,
  release_date: `${text('Release date', '2020-11-15')}`,
  genres: ['Comedy'],
  overview: text('Description', 'some descritption'),
  runtime: number('Runtime', 12, { min: 1, max: 300 }),
};

const defaultGenres = object('Default genres', [
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Drama', value: 'Drama' },
]);

export const Default = () => (
  <FilmForm
    title={text('Form Title', 'Add Film')}
    initialState={intialState}
    onSubmit={() => alert('Form was submitted')}
    onClose={() => alert('Form was closed')}
    defaultGenres={defaultGenres}
  />
);
