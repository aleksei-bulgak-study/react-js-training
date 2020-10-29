import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Wrapper from '../Wrapper';
import ErrorBoundary from '../ErrorBoundary';

import './TopSection.css';

const buildClassNameString = (active) => {
  const classes = ['search-preview'];
  classes.push(active ? '' : 'blured');
  return classes.join(' ');
};

const TopSection = ({ children, active }) => {
  const className = useMemo(() => buildClassNameString(active), [active]);

  return (
    <section className={className}>
      <ErrorBoundary>
        <Wrapper>{children}</Wrapper>
      </ErrorBoundary>
    </section>
  );
};

TopSection.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  preview: state.films.preview,
});

export default connect(mapStateToProps)(TopSection);
