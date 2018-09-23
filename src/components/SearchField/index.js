import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const SearchField = props => {
  const { isLoading, width } = props;

  return (
    <Fragment>
      <TextField
        style={ { width: width } }
        color="primary"
        label="Search..."
        disabled={ isLoading }
      />
    </Fragment>
  );
};

SearchField.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired
};

export default SearchField;
