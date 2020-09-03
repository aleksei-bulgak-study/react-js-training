import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Footer, Main, TopSection } from '../components';
import {
  AddFilm,
  EditFilm,
  DeleteFilm,
  Congratulation,
} from '../components/ModalWindows';
import { filmActions, commonActions } from '../store/actions';
import Loader from '../components/ModalWindows/Loader';

const Home = ({
  films,
  filmForProcessing,
  filters,
  common,
  onFilterFilms,
  onModalClose,
  onFilmDeletion,
}) => {
  useEffect(() => {
    const { searchString, order, genre } = filters;
    const pattern = new RegExp(searchString, 'gi');
    const filteredResults = films
      .filter(
        (film) =>
          genre === null ||
          genre.toLowerCase() === 'all' ||
          film.genres.indexOf(genre) !== -1,
      )
      .filter((film) => pattern.test(film.title.toLowerCase()))
      .sort((f, s) => {
        if (f[order] > s[order]) {
          return 1;
        }
        return -1;
      });
    onFilterFilms(filteredResults);
  }, [films, filters, onFilterFilms]);

  const isModalWindoOpened = useMemo(() => common.modalWindow !== null, [
    common.modalWindow,
  ]);

  return (
    <>
      <Header />
      <TopSection active={!isModalWindoOpened} />
      <Main active={!isModalWindoOpened} />
      <Footer />
      {common.modalWindow === commonActions.types.DELETE_FILM && (
        <DeleteFilm onDelete={onFilmDeletion} onClose={onModalClose} />
      )}
      {common.modalWindow === commonActions.types.EDIT_FILM && (
        <EditFilm details={filmForProcessing} onClose={onModalClose} />
      )}
      {common.modalWindow === commonActions.types.ADD_FILM && (
        <AddFilm onClose={onModalClose} />
      )}
      {common.modalWindow === commonActions.types.CONGRATULATION && (
        <Congratulation onClose={onModalClose} />
      )}
      {common.loader && <Loader />}
    </>
  );
};

Home.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      release_date: PropTypes.string,
      url: PropTypes.string,
      genre: PropTypes.arrayOf(PropTypes.string),
      overview: PropTypes.string,
      runtime: PropTypes.number,
    }),
  ).isRequired,
  filmForProcessing: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  filters: PropTypes.shape({
    searchString: PropTypes.string,
    order: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    loader: PropTypes.bool,
  }).isRequired,
  onFilterFilms: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onFilmDeletion: PropTypes.func.isRequired,
};

Home.defaultProps = {
  filmForProcessing: {},
};

const mapDispatchToProps = (dispatch) => ({
  onFilterFilms: (films) => dispatch(filmActions.filteredFilms(films)),
  onModalClose: () => dispatch(commonActions.closeModalWindow()),
  onFilmDeletion: () => dispatch(filmActions.deleteFilm()),
});

const mapStateToProps = (state) => ({
  films: state.films.films,
  filters: state.filters,
  common: state.common,
  filmForProcessing: state.films.filmForProcessing,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
