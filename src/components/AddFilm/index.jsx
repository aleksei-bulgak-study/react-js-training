import React from 'react';
import ModalWindow from '../ModalWindow';
import './styles.css';
import Button, { types } from '../Common/Button';
import LabeledInput from '../Common/LabeledInput';

const AddFilm = ({ closeAction }) => (
  <form className="add-film" onSubmit={() => console.log('form submitted')}>
    <ModalWindow title="add movie" closeAction={closeAction}>
      <LabeledInput id="film-id" title="Movie id" />
      <LabeledInput id="film-title" title="Title" />
      <LabeledInput id="film-release" title="Release date" />
      <LabeledInput id="film-url" title="Movie url" />
      <label htmlFor="film-genres">
        Genre
        <select id="film-genres">
          <option>comedy</option>
        </select>
      </label>
      <LabeledInput id="film-overview" title="Overview" />
      <LabeledInput id="film-runtime" title="Runtime" />

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

export default AddFilm;
