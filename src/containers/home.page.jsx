import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Main, TopSection } from '../components';
import DeleteFilm from '../components/DeleteFilm';
import EditFilm from '../components/EditFilm';
import AddFilm from '../components/AddFilm';

const ORDER_MAPPING = {
  'release date': 'release_date',
  runtime: 'runtime',
  budget: 'budget',
  revenue: 'revenue',
  'vote average': 'vote_average',
};

const Home = ({ preview, results, setResults }) => {
  const [filtered, setFilteredResults] = useState(results);
  const [showDialog, setShowDialog] = useState(false);
  const [filmForDeletion, setFilmForDeletion] = useState();
  const [filmForEdit, setFilmForEdit] = useState();
  const [addNewFilm, setAddNewFilm] = useState(false);
  const [filter, setFilter] = useState({
    genre: null,
    order: 'release_date',
    searchString: '',
  });

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

  const closeDialog = () => {
    setShowDialog(false);
    setFilmForDeletion(null);
    setFilmForEdit(null);
    setAddNewFilm(false);
  };

  const filterByGenreAction = (genre) => {
    setFilter({ ...filter, genre: genre === 'All' ? null : genre });
  };

  const sortingAction = (sortingField) => {
    setFilter({ ...filter, order: ORDER_MAPPING[sortingField.toLowerCase()] });
  };

  const filterByName = (query) => {
    setFilter({ ...filter, searchString: query.toLowerCase() });
  };

  useEffect(() => {
    const { searchString, order, genre } = filter;
    const pattern = new RegExp(searchString);
    setFilteredResults(
      results
        .filter((film) => genre === null || film.genres.indexOf(genre) !== -1)
        .filter((film) => pattern.test(film.title.toLowerCase()))
        .sort((f, s) => {
          if (f[order] > s[order]) {
            return 1;
          }
          return -1;
        }),
    );
  }, [filter]);

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
        filterByGenreAction={filterByGenreAction}
        sortingAction={sortingAction}
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
      {showDialog && addNewFilm && <AddFilm closeAction={closeDialog} />}
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
