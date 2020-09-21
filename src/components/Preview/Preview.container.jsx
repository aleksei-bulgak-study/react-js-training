import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router';
import Preview from './Preview';
import { filmActions } from '../../store/actions';

const PreviewContainer = ({
  preview,
  searchString,
  onPreviewClose,
  onLoadFilmById,
}) => {
  const history = useHistory();
  const onClose = useCallback(() => {
    history.push(`/search?query=${searchString}`);
    onPreviewClose();
  }, [history, searchString, onPreviewClose]);

  const { id } = useParams();
  useEffect(() => {
    if (!preview.id && id) {
      onLoadFilmById(id);
    }
  }, []);
  return <Preview preview={preview} onPreviewClose={onClose} />;
};

PreviewContainer.propTypes = {
  preview: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
  }),
  onPreviewClose: PropTypes.func.isRequired,
  searchString: PropTypes.string,
  onLoadFilmById: PropTypes.func.isRequired,
};

PreviewContainer.defaultProps = {
  searchString: '',
  preview: {
    id: null,
    title: 'Default title',
    vote_average: 0,
    tagline: '',
    release_date: new Date().toString(),
    runtime: 0,
  },
};

const mapStateToProps = (state) => ({
  preview: state.films.preview,
  searchString: state.filters.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onPreviewClose: () => dispatch(filmActions.closeFilmPreview()),
  onLoadFilmById: (id) => dispatch(filmActions.getFilmById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewContainer);
