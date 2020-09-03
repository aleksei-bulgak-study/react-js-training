import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import LabeledInput from '../LabeledInput';
import BaseModalWindow from '../../ModalWindows/BaseModalWindow';
import LabeledMultiSelect from '../LabeledMultiSelect';
import Button, { types } from '../Button';

import './styles.css';

const isFieldEditable = (fieldName, readOnlyFields) =>
  readOnlyFields.indexOf(fieldName) === -1;

const convertBasedOnType = (type, value) => {
  if (type === 'number') {
    return +value;
  }
  return value;
};

const FilmForm = ({
  title,
  initialState = {},
  onSubmit,
  onClose,
  defaultGenres,
  readOnlyFields,
}) => {
  const [data, setData] = useState({ ...initialState });

  const onDataChange = useCallback(
    ({ target: { name, value, type } }) => {
      if (isFieldEditable(name, readOnlyFields)) {
        setData({ ...data, [name]: convertBasedOnType(type, value) });
      }
    },
    [data, readOnlyFields],
  );

  const onSelectStateChange = useCallback(
    (key) => (values) => {
      if (values && isFieldEditable(key, readOnlyFields)) {
        const genres = values.map((item) => item.value);
        setData({ ...data, [key]: genres });
      }
    },
    [data, readOnlyFields, setData],
  );

  const onReset = useCallback(() => setData(initialState), [
    initialState,
    setData,
  ]);

  const onSave = useCallback(() => onSubmit(data), [data, onSubmit]);

  return (
    <form className="film-form" onSubmit={onSave}>
      <BaseModalWindow title={title} onClose={onClose}>
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
          name="poster_path"
          title="Movie url"
          type="url"
          value={data.poster_path}
          onChange={onDataChange}
        />
        <LabeledMultiSelect
          title="genres"
          options={defaultGenres}
          onAction={onSelectStateChange('genres')}
          preselected={data.genres}
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
      </BaseModalWindow>
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
      label: PropTypes.string.isRequired,
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
