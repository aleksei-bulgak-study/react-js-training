import React, { useState, useCallback, useMemo } from 'react';
import { Header, Footer, Main, TopSection } from '../components';
import DeleteFilm from '../components/DeleteFilm';
import EditFilm from '../components/EditFilm';
import AddFilm from '../components/AddFilm';
import Congratulation from '../components/Congratulation';

import data from '../movies.json';
import useFilmsWithFilter from '../hooks/useFilmsWithFilter';
import DIALOG_TYPES from '../model/dialogType';
import FilmActions from '../providers/filmActionsProvider';

const ORDER_MAPPING = {
  'release date': 'release_date',
  runtime: 'runtime',
  budget: 'budget',
  revenue: 'revenue',
  'vote average': 'vote_average',
};

const Home = () => {
  const [results, setResults] = useState(data.slice(0, 10));
  const [filter, setFilter] = useState({
    genre: null,
    order: 'release_date',
    searchString: '',
  });
  const filtered = useFilmsWithFilter(results, filter);
  const [preview, setPreview] = useState();
  const [filmForProcessing, setFilmForProcessing] = useState();
  const [dialogType, setDialogType] = useState();

  const openModalWindow = useCallback(
    (type, details) => {
      setDialogType(type);
      setFilmForProcessing(details);
    },
    [setFilmForProcessing, setDialogType],
  );

  const closeModalWindow = () => {
    setDialogType(null);
    setFilmForProcessing(null);
  };

  const onFilmDeletion = useCallback(
    (film) => openModalWindow(DIALOG_TYPES.delete, film),
    [openModalWindow],
  );
  const onFilmEdit = useCallback(
    (film) => openModalWindow(DIALOG_TYPES.edit, film),
    [openModalWindow],
  );
  const onFilmAdd = useCallback(
    () => openModalWindow(DIALOG_TYPES.add, null),
    [openModalWindow],
  );
  const onFilmPreview = useCallback(
    (details) => {
      setPreview(details);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [setPreview],
  );
  const onPreviewClose = useCallback(() => setPreview(null), [setPreview]);

  const removeFilmById = useCallback(
    (id) => {
      const newResults = results.filter((film) => film.id !== id);
      setResults(newResults);
    },
    [results],
  );

  const processFilmDeletion = useCallback(() => {
    removeFilmById(filmForProcessing.id);
    closeModalWindow();
  }, [filmForProcessing, removeFilmById]);

  const onFilterByGenre = useCallback(
    (genre) => {
      setFilter({ ...filter, genre: genre === 'All' ? null : genre });
    },
    [filter],
  );

  const onSorting = useCallback(
    (sortingField) => {
      setFilter({
        ...filter,
        order: ORDER_MAPPING[sortingField.toLowerCase()],
      });
    },
    [filter],
  );

  const onFilterByName = useCallback(
    (query) => {
      setFilter({ ...filter, searchString: query.toLowerCase() });
    },
    [filter],
  );

  const filmActions = useMemo(
    () => ({ onFilmAdd, onFilmDeletion, onFilmEdit, onFilmPreview }),
    [onFilmAdd, onFilmDeletion, onFilmEdit, onFilmPreview],
  );

  return (
    <FilmActions.Provider value={filmActions}>
      <Header />
      <TopSection
        preview={preview}
        filterByName={filter.searchString}
        onFilterByName={onFilterByName}
        blur={!!dialogType}
        onPreviewClose={onPreviewClose}
      />
      <Main
        searchResults={filtered}
        blur={!!dialogType}
        onFilterByGenre={onFilterByGenre}
        onSorting={onSorting}
      />
      <Footer />
      {dialogType === DIALOG_TYPES.delete && (
        <DeleteFilm onClose={closeModalWindow} onDelete={processFilmDeletion} />
      )}
      {dialogType === DIALOG_TYPES.edit && (
        <EditFilm details={filmForProcessing} onClose={closeModalWindow} />
      )}
      {dialogType === DIALOG_TYPES.add && (
        <AddFilm onClose={closeModalWindow} />
      )}
      {dialogType === DIALOG_TYPES.congratulation && (
        <Congratulation onClose={closeModalWindow} />
      )}
    </FilmActions.Provider>
  );
};

export default Home;
