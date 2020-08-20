import React, { useState } from 'react';
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

const AddFilm = ({ onClose }) => {
  const [data, setData] = useState({});

  const onDataChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const onSelectStateChange = (key) => (values) => {
    if (values) {
      const genres = values.map((item) => item.value);
      setData({ ...data, [key]: genres });
    }
  };

  const onReset = () => setData({});

  return (
    <form className="add-film" onSubmit={() => console.log('form submitted')}>
      <ModalWindow title="add movie" onClose={onClose}>
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
          options={DEFAULT_GENRES}
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

        <div className="edit-film__actions">
          <Button title="reset" onClick={onReset} type={types.SECONDARY} />
          <Button title="submit" onClick={() => console.log(data)} />
        </div>
      </ModalWindow>
    </form>
  );
};

AddFilm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddFilm;
