import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import Button, { types } from '../Common/Button';
import LabeledInput from '../Common/LabeledInput';
import LabeledText from '../Common/LabeledText';
import LabeledMultiSelect from '../Common/LabeledMultiSelect';

import './styles.css';

const DEFAULT_GENRES = [
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Crime', value: 'Crime' },
];

const EditFilm = ({ closeAction, details }) => (
  <form className="edit-film" onSubmit={() => console.log('form submitted')}>
    <ModalWindow title="edit movie" closeAction={closeAction}>
      <LabeledText id="film-id" title="Movie id" value={details.id} />
      <LabeledInput id="film-title" title="Title" value={details.title} />
      <LabeledInput
        id="film-release"
        title="Release date"
        value={details.release_date}
      />
      <LabeledInput id="film-url" title="Movie url" value={details.url} />
      <LabeledMultiSelect
        title="genre"
        options={DEFAULT_GENRES}
        onAction={(data) => console.log(data)}
        preselected={details.genres}
      />
      <LabeledInput
        id="film-overview"
        title="Overview"
        value={details.overview}
      />
      <LabeledInput id="film-runtime" title="Runtime" value={details.runtime} />
      <div className="edit-film__actions">
        <Button
          title="reset"
          onClick={() => console.log('TODO reset action')}
          type={types.SECONDARY}
        />
        <Button title="save" onClick={() => console.log('TODO save action')} />
      </div>
    </ModalWindow>
  </form>
);

EditFilm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
};

export default EditFilm;
