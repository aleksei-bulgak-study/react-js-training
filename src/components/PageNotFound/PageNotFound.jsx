import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Common';
import notFoundImage from '../../../public/images/404.png';

import './PageNotFound.css';

const PageNotFound = ({ GoBackLink }) => (
  <div className="page-not-found">
    <h1 className="page-not-found__title">Page not found</h1>
    <Image src={notFoundImage} />
    {GoBackLink}
  </div>
);

PageNotFound.propTypes = {
  GoBackLink: PropTypes.node.isRequired,
};

export default PageNotFound;
