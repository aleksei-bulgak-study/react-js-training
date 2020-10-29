import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Sorting.css';

const Sorting = ({
  title,
  options,
  onAction,
  selectedOption,
}) => {
  const [selected, setSelected] = useState(selectedOption || options[0]);
  const onChange = (event) => {
    const { value } = event.target;
    onAction(value);
    setSelected(value);
  };
  return (
    <label htmlFor="date-filter" className="sorting__title">
      {title}
      <select
        id="date-filter"
        className="sorting__select"
        onChange={onChange}
        value={selected}
      >
        {options.map((option) => (
          <option key={option} className="sorting__item" value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

Sorting.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAction: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
};

Sorting.defaultProps = {
  selectedOption: null,
};

export default Sorting;
