import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Main, TopSection } from '../components';
import DeleteFilm from '../components/DeleteFilm';

const Home = ({ preview, results, removeFilmById }) => {
  const [deleteAction, setDeleteAction] = useState({
    showDialog: false,
    filmForDeletion: null,
  });

  const removeFilmAction = (id) => {
    setDeleteAction({ showDialog: true, filmForDeletion: id });
  };

  const processFilmDeletion = () => {
    removeFilmById(deleteAction.filmForDeletion);
    hideFilmDeletionPopup();
  };

  const hideFilmDeletionPopup = () => setDeleteAction({ showDialog: false });

  return (
    <>
      <Header preview={preview} />
      <TopSection preview={preview} />
      <Main searchResults={results} removeFilmAction={removeFilmAction} />
      <Footer />
      {deleteAction.showDialog && (
        <DeleteFilm
          closeAction={hideFilmDeletionPopup}
          deleteAction={processFilmDeletion}
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
};

Home.defaultProps = {
  preview: null,
  results: [],
};

export default Home;
