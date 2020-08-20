import React, { useState, useEffect } from 'react';
import { Header, Footer, Main, TopSection } from '../components';
import DeleteFilm from '../components/DeleteFilm';
import EditFilm from '../components/EditFilm';
import AddFilm from '../components/AddFilm';
import Congratulation from '../components/Congratulation';

import data from '../movies.json';

const ORDER_MAPPING = {
  'release date': 'release_date',
  runtime: 'runtime',
  budget: 'budget',
  revenue: 'revenue',
  'vote average': 'vote_average',
};

const Home = () => {
  const [filtered, setFilteredResults] = useState(results);
  const [showDialog, setShowDialog] = useState(false);
  const [filmForDeletion, setFilmForDeletion] = useState();
  const [filmForEdit, setFilmForEdit] = useState();
  const [addNewFilm, setAddNewFilm] = useState(false);
  const [congratulation, setCongratulation] = useState(false);
  const [filter, setFilter] = useState({
    genre: null,
    order: 'release_date',
    searchString: '',
  });
  const [preview, setPreview] = useState();
  const [results, setResults] = useState(data.slice(0, 10));

  const onFilmDeletion = (id) => {
    setShowDialog(true);
    setFilmForDeletion(id);
  };

  const onFilmEdit = (filmForUpdate) => {
    setShowDialog(true);
    setFilmForEdit(filmForUpdate);
  };

  const onFilmAdd = () => {
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
    setCongratulation(false);
  };

  const onFilterByGenre = (genre) => {
    setFilter({ ...filter, genre: genre === 'All' ? null : genre });
  };

  const onSorting = (sortingField) => {
    setFilter({ ...filter, order: ORDER_MAPPING[sortingField.toLowerCase()] });
  };

  const onFilterByName = (query) => {
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
  }, [filter, results]);

  return (
    <>
      <Header />
      <TopSection
        preview={preview}
        filterByName={filter.searchString}
        onFilterByName={onFilterByName}
        onFilmAdd={onFilmAdd}
        blur={showDialog}
        onPreviewClose={() => setPreview(null)}
      />
      <Main
        searchResults={filtered}
        onFilmDeletion={onFilmDeletion}
        onFilmEdit={onFilmEdit}
        blur={showDialog}
        onFilterByGenre={onFilterByGenre}
        onSorting={onSorting}
        onFilmPreview={(details) => {
          setPreview(details);
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      />
      <Footer />
      {showDialog && filmForDeletion && (
        <DeleteFilm onClose={closeDialog} onDelete={processFilmDeletion} />
      )}
      {showDialog && filmForEdit && (
        <EditFilm
          details={filmForEdit}
          onClose={closeDialog}
        />
      )}
      {showDialog && addNewFilm && <AddFilm onClose={closeDialog} />}
      {showDialog && congratulation && <Congratulation onClose={closeDialog} />}
    </>
  );
};

export default Home;
