import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MultiSelect from 'react-multi-select-component';
import './styles.css';

const buildValues = (elems) => elems.map((e) => ({ label: e, value: e }));

const LabeledMultiSelect = ({ title, options, onAction, preselected }) => {
  const selected = useMemo(() => buildValues(preselected) || [], [preselected]);

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
    </label>
  );
};

LabeledMultiSelect.propTypes = {
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  preselected: PropTypes.arrayOf(PropTypes.string),
};

LabeledMultiSelect.defaultProps = {
  preselected: [],
};

export default LabeledMultiSelect;
