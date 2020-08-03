import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error">
          Something went wrong. Please try again later
        </div>
      );
    }
    return <div className="wrapper">{children}</div>;
  }
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
