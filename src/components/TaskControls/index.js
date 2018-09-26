import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton/IconButton';
import ApplyIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css';

const TaskControls = props => {
  const {
    underEditing,
    enableEditMode,
    disableEditMode,
    renameTitle,
    deleteTask
  } = props;

  if (underEditing) {
    return (
      <div className="taskEditControls">
        <IconButton
          color="primary"
          onClick={ renameTitle }
        >
          <ApplyIcon fontSize="small" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={ disableEditMode }
        >
          <CancelIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }

  return (
    <div className="taskControls">
      <IconButton
        color="primary"
        onClick={ enableEditMode }
      >
        <EditIcon fontSize="small" />
      </IconButton>

      <IconButton
        color="secondary"
        onClick={ deleteTask }
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

TaskControls.propTypes = {
  underEditing: PropTypes.bool.isRequired,

  enableEditMode: PropTypes.func.isRequired,
  disableEditMode: PropTypes.func.isRequired,
  renameTitle: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default TaskControls;
