import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

export const LoadableComponent = props => {
  const { isLoading, children } = props;

  if (!isLoading) return children;

  return (
    <div className="spinnerContainer">
      <CircularProgress
        className="spinner"
        size={ 60 }
        thickness={ 2 }
      />
    </div>
  );
};

LoadableComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object
};

export default LoadableComponent;
