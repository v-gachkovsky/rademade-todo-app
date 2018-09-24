import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './styles.css';

const TaskSorter = props => {
  const { sortDirection, changeSortDirection } = props;

  const buttonTitle = sortDirection === 'ASC'
    ? (
      <span className="sortDirectionButtonTitle">
        Completed tasks in the TOP
        <i className="sortDirectionArrow material-icons">arrow_drop_down</i>
      </span>
    ) : (
      <span className="sortDirectionButtonTitle">
        Uncompleted tasks in the TOP
        <i className="sortDirectionArrow material-icons">arrow_drop_up</i>
      </span>
    );


  return (
    <Fragment>
      <Button
        className="sortDirectionButton"
        color="primary"
        onClick={ changeSortDirection }
      >
        { buttonTitle }
      </Button>
    </Fragment>
  );

};

TaskSorter.propTypes = {
  sortDirection: PropTypes.string.isRequired,
  changeSortDirection: PropTypes.func.isRequired
};

export default TaskSorter;
