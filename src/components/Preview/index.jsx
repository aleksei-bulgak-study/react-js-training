import React from 'react';
import PropTypes from 'prop-types';

const Preview = ({ preview }) => (
  <>
    TODO: Implement movie preview based on provided model
    {preview}
  </>
);

Preview.propTypes = {
  preview: PropTypes.func.isRequired,
};

export default Preview;
