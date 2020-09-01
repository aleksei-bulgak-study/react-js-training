import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import MenuOpened from './MenuOpened';
import HamburgerButton from '../../Common/HamburgerButton';

const FilmSettings = ({ onEdit, onDelete, className }) => {
  const [isOpened, setIsOpened] = useState(false);
  const onOpen = useCallback((value) => setIsOpened(value), [setIsOpened]);
  const onClose = useCallback(() => setIsOpened(false), [setIsOpened]);

  const filmSettingsClassName = useMemo(() => {
    const additionalClass = isOpened ? `${className}--opened` : className;
    return `${className} ${additionalClass}`;
  }, [className, isOpened]);

  return (
    <div className={filmSettingsClassName}>
      {!isOpened && <HamburgerButton onClick={onOpen} className="film__menu" />}
      {isOpened && (
        <MenuOpened onClose={onClose} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  );
};

FilmSettings.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FilmSettings.defaultProps = {
  className: '',
};

export default FilmSettings;
