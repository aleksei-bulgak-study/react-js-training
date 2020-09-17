import React from 'react';
import PropTypes from 'prop-types';
import { AddFilm, EditFilm, DeleteFilm } from '../ModalWindows';
import Loader from '../ModalWindows/Loader';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import { commonActions } from '../../store/actions';
import TopSection from '../TopSection';

const Home = ({
  isModalWindoOpened,
  loader,
  modalWindowType,
  TopSectionContent,
}) => {
  return (
    <>
      <Header />
      <TopSection active={!isModalWindoOpened}>{TopSectionContent}</TopSection>
      <Main active={!isModalWindoOpened} />
      <Footer />
      {modalWindowType === commonActions.types.DELETE_FILM && <DeleteFilm />}
      {modalWindowType === commonActions.types.EDIT_FILM && <EditFilm />}
      {modalWindowType === commonActions.types.ADD_FILM && <AddFilm />}
      {loader && <Loader />}
    </>
  );
};

Home.propTypes = {
  isModalWindoOpened: PropTypes.bool.isRequired,
  modalWindowType: PropTypes.string,
  TopSectionContent: PropTypes.node.isRequired,
  loader: PropTypes.bool,
  filmForProcessing: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    release_date: PropTypes.string,
    url: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

Home.defaultProps = {
  modalWindowType: null,
  loader: false,
  filmForProcessing: null,
};

export default Home;
