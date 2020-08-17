import React from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../ModalWindow';
import './styles.css';
import Button, { types } from '../Common/Button';
import LabeledInput from '../Common/LabeledInput';
import LabeledMultiSelect from '../Common/LabeledMultiSelect';

const DEFAULT_GENRES = [
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Crime', value: 'Crime' },
];

const stubbedOnChange = (value) => console.log(value);

const AddFilm = ({ closeAction }) => (
  <form className="add-film" onSubmit={() => console.log('form submitted')}>
    <ModalWindow title="add movie" closeAction={closeAction}>
      <LabeledInput id="film-id" title="Movie id" onChange={stubbedOnChange} />
      <LabeledInput id="film-title" title="Title" onChange={stubbedOnChange} />
      <LabeledInput
        id="film-release"
        title="Release date"
        onChange={stubbedOnChange}
      />
      <LabeledInput
        id="film-url"
        title="Movie url"
        onChange={stubbedOnChange}
      />
      <LabeledMultiSelect
        title="genre"
        options={DEFAULT_GENRES}
        onAction={(data) => console.log(data)}
      />
      <LabeledInput
        id="film-overview"
        title="Overview"
        onChange={stubbedOnChange}
      />
      <LabeledInput
        id="film-runtime"
        title="Runtime"
        onChange={stubbedOnChange}
      />

      <div className="edit-film__actions">
        <Button
          title="reset"
          onClick={() => console.log('TODO reset action')}
          type={types.SECONDARY}
        />
        <Button
          title="submit"
          onClick={() => console.log('TODO submit action')}
        />
      </div>
    </ModalWindow>
  </form>
);

AddFilm.propTypes = {
  closeAction: PropTypes.func.isRequired,
};

export default AddFilm;
