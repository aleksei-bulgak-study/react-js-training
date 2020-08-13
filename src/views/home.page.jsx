import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  Main,
  TopSection,
} from '../components';
import DeleteFilm from '../components/DeleteFilm';
import EditFilm from '../components/EditFilm';
import AddFilm from '../components/AddFilm';

const Home = ({ preview, results, setResults }) => {
  const [filtered, setFilteredResults] = useState(results);
  const [showDialog, setShowDialog] = useState(false);
  const [filmForDeletion, setFilmForDeletion] = useState();
  const [filmForEdit, setFilmForEdit] = useState();
  const [addNewFilm, setAddNewFilm] = useState(false);

  const removeFilmAction = (id) => {
    setShowDialog(true);
    setFilmForDeletion(id);
  };

  const editFilmAction = (filmForUpdate) => {
    setShowDialog(true);
    setFilmForEdit(filmForUpdate);
  };

  const addFilmAction = () => {
    setShowDialog(true);
    setAddNewFilm(true);
  };

  const removeFilmById = (id) => {
    const newResults = results.filter((film) => film.id !== id);
    const newFilteredResult = filtered.filter((film) => film.id !== id);
    setResults(newResults);
    setFilteredResults(newFilteredResult);
  };

  const processFilmDeletion = () => {
    removeFilmById(filmForDeletion);
    setShowDialog(false);
    setFilmForDeletion(null);
  };

  const filterByName = (query) => {
    const pattern = new RegExp(query.toLowerCase());
    const filteredResults = results.filter((film) => pattern.test(film.title.toLowerCase()));
    setFilteredResults(filteredResults);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setFilmForDeletion(null);
    setFilmForEdit(null);
    setAddNewFilm(false);
  };

  return (
    <>
      <Header preview={preview} />
      <TopSection
        preview={preview}
        filterByName={filterByName}
        addFilmAction={addFilmAction}
        blur={showDialog}
      />
      <Main
        searchResults={filtered}
        removeFilmAction={removeFilmAction}
        editFilmAction={editFilmAction}
        blur={showDialog}
      />
      <Footer />
      {showDialog && filmForDeletion && (
        <DeleteFilm
          closeAction={closeDialog}
          deleteAction={processFilmDeletion}
        />
      )}
      {showDialog && filmForEdit && (
        <EditFilm
          details={filmForEdit}
          closeAction={closeDialog}
          saveAction={(data) => console.log('saving')}
        />
      )}
      {showDialog && addNewFilm && (
        <AddFilm
          closeAction={closeDialog}
        />
      )}
    </>
  );
};

Home.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.string.isRequired,
  }),

  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseYear: PropTypes.string.isRequired,
    }),
  ),
  setResults: PropTypes.func.isRequired,
};

Home.defaultProps = {
  preview: null,
  results: [],
};

export default Home;
