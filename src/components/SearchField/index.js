import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const SearchField = props => {
  const { searchPattern, changeSearchPattern, isLoading, width } = props;

  return (
    <Fragment>
      <TextField
        style={ { width: width } }
        color="primary"
        label="Search..."
        value={ searchPattern }
        onChange={ changeSearchPattern }
        disabled={ isLoading }
      />
    </Fragment>
  );
};

SearchField.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  searchPattern: PropTypes.string.isRequired,
  changeSearchPattern: PropTypes.func.isRequired
};

export default SearchField;
