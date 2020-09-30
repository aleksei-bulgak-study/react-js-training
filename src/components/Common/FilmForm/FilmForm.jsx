import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import LabeledInput from '../LabeledInput';
import LabeledText from '../LabeledText';
import BaseModalWindow from '../../ModalWindows/BaseModalWindow';
import LabeledMultiSelect from '../LabeledMultiSelect';
import Button, { types } from '../Button';

import './styles.css';

const FilmForm = ({
  title,
  initialState = {},
  onSubmit,
  onClose,
  defaultGenres,
}) => {
  const onSave = useCallback((data) => onSubmit(data), [onSubmit]);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required field'),
      release_date: Yup.string()
        .transform((value) => {
          const dateValue = moment(value);

          return dateValue.isValid() ? dateValue.format('MM/dd/yyyy') : '';
        })
        .required('Release date is required field'),
      poster_path: Yup.string().url().required('Poster should be a valid url'),
      overview: Yup.string().required('Film description is required'),
      runtime: Yup.number()
        .min(0)
        .required('Runtime should be numeric value more then 0'),
      genres: Yup.array().min(1).required('At least 1 genre must be selected'),
    }),
    onSubmit: onSave,
  });

  const onSelectStateChange = useCallback(
    (values) => {
      const genres = values.map((item) => item.value);
      formik.setFieldValue('genres', genres, true);
    },
    [formik],
  );

  const getErrorMessageForField = useCallback(
    (fieldName) => {
      if (formik.touched[fieldName] && formik.errors[fieldName]) {
        return formik.errors[fieldName];
      }
      return '';
    },
    [formik],
  );

  return (
    <form className="film-form" onSubmit={formik.handleSubmit}>
      <BaseModalWindow title={title} onClose={onClose}>
        {formik.values.id !== undefined && (
          <LabeledText
            id="film-id"
            name="id"
            title="Movie id"
            value={formik.values.id}
          />
        )}
        <LabeledInput
          id="film-title"
          name="title"
          title="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getErrorMessageForField('title')}
        />
        <LabeledInput
          id="film-release"
          name="release_date"
          title="Release date"
          type="date"
          value={formik.values.release_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getErrorMessageForField('release_date')}
        />
        <LabeledInput
          id="film-url"
          name="poster_path"
          title="Movie url"
          type="url"
          value={formik.values.poster_path}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getErrorMessageForField('poster_path')}
        />
        <LabeledMultiSelect
          title="genres"
          options={defaultGenres}
          onAction={onSelectStateChange}
          preselected={formik.values.genres}
          error={getErrorMessageForField('genres')}
        />
        <LabeledInput
          id="film-overview"
          name="overview"
          title="Overview"
          value={formik.values.overview}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getErrorMessageForField('overview')}
        />
        <LabeledInput
          id="film-runtime"
          name="runtime"
          title="Runtime"
          type="number"
          value={formik.values.runtime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getErrorMessageForField('runtime')}
        />
        <div className="film-form__actions">
          <Button
            title="reset"
            onClick={formik.resetForm}
            type={types.SECONDARY}
            className="film-form__actions__reset"
          />
          <Button
            title="save"
            onClick={formik.handleSubmit}
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
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
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
};

FilmForm.defaultProps = {
  initialState: {
    id: undefined,
    title: undefined,
    poster_path: undefined,
    release_date: undefined,
    genres: [],
    overview: undefined,
    runtime: undefined,
  },
};

export default FilmForm;
