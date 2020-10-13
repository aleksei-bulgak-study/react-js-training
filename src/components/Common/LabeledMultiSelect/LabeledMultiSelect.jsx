import React from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';
import './LabeledMultiSelect.css';

const buildValues = (elems) => elems.map((e) => ({ label: e, value: e }));

const LabeledMultiSelect = ({ title, options, onAction, preselected, error }) => {
  const selected = buildValues(preselected) || [];

  return (
    <label htmlFor="genres" className="genres">
      {title}
      <MultiSelect
        id="genres"
        options={options}
        value={selected}
        onChange={onAction}
        hasSelectAll={false}
        disableSearch
      />
      {error !== '' && <p className="genres__error">{error}</p>}
    </label>
  );
};

LabeledMultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  preselected: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
};

LabeledMultiSelect.defaultProps = {
  preselected: [],
  error: '',
};

export default LabeledMultiSelect;
