import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LabeledInput from '../LabeledInput';
import ModalWindow from '../../ModalWindow';
import LabeledMultiSelect from '../LabeledMultiSelect';
import Button, { types } from '../Button';

import './styles.css';

const isFieldEditable = (fieldName, readOnlyFields) =>
  readOnlyFields.indexOf(fieldName) === -1;

const FilmForm = ({
  title,
  initialState = {},
  onSubmit,
  onClose,
  defaultGenres,
  readOnlyFields,
}) => {
  const [data, setData] = useState(initialState);

  const onDataChange = ({ target: { name, value } }) => {
    if (isFieldEditable(name, readOnlyFields)) {
      setData({ ...data, [name]: value });
    }
  };

  const onSelectStateChange = (key) => (values) => {
    if (values && isFieldEditable(key, readOnlyFields)) {
      const genres = values.map((item) => item.value);
      setData({ ...data, [key]: genres });
    }
  };

  const onReset = () => setData(initialState);

  const onSave = () => onSubmit(data);

  return (
    <form className="film-form" onSubmit={onSave}>
      <ModalWindow title={title} onClose={onClose}>
        <LabeledInput
          id="film-id"
          name="id"
          title="Movie id"
          value={data.id}
          onChange={onDataChange}
        />
        <LabeledInput
          id="film-title"
          name="title"
          title="Title"
          value={data.title}
          onChange={onDataChange}
        />
        <LabeledInput
          id="film-release"
          name="release_date"
          title="Release date"
          type="date"
          value={data.release_date}
          onChange={onDataChange}
        />
        <LabeledInput
          id="film-url"
          name="url"
          title="Movie url"
          type="url"
          value={data.url}
          onChange={onDataChange}
        />
        <LabeledMultiSelect
          title="genre"
          options={defaultGenres}
          onAction={onSelectStateChange('genre')}
          preselected={data.genre}
        />
        <LabeledInput
          id="film-overview"
          name="overview"
          title="Overview"
          value={data.overview}
          onChange={onDataChange}
        />
        <LabeledInput
          id="film-runtime"
          name="runtime"
          title="Runtime"
          type="number"
          value={data.runtime}
          onChange={onDataChange}
        />

        <div className="film-form__actions">
          <Button
            title="reset"
            onClick={onReset}
            type={types.SECONDARY}
            className="film-form__actions__reset"
          />
          <Button
            title="save"
            onClick={onSave}
            className="film-form__actions__submit"
          />
        </div>
      </ModalWindow>
    </form>
  );
};

FilmForm.propTypes = {
  initialState: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  defaultGenres: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  readOnlyFields: PropTypes.arrayOf(PropTypes.string),
};

FilmForm.defaultProps = {
  initialState: {},
  readOnlyFields: [],
};

export default FilmForm;
