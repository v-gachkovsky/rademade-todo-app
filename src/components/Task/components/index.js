import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import ApplyIcon from '@material-ui/icons/Done';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './styles.css';

export class Task extends PureComponent {
  state = {
    task: {},
    nextTaskTitle: '',
    prevTask: {},
    underEditing: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevTask !== nextProps.task) {
      return {
        task: nextProps.task,
        prevTask: nextProps.task
      };
    }

    return null;
  }

  applyTitle = () => {
    const { task, nextTaskTitle } = this.state;

    this.setState({
      task: { ...task, title: nextTaskTitle }
    }, () => {
      this.disableEditMode();
    });
  };

  renderTask() {
    const { onChange } = this.props;
    const { task, nextTaskTitle, underEditing } = this.state;

    if (underEditing) {
      return (
        <TextField
          className="taskTitleEditField"
          value={ nextTaskTitle }
          onChange={ e =>
            this.setState({
              nextTaskTitle: e.target.value
            })
          }
        />
      );
    }

    return (
      <FormControlLabel
        control={
          <Checkbox color="primary" checked={ task.status } onChange={ onChange } />
        }
        label={ task.title }
      />
    );
  }

  renderTaskControl() {
    const { underEditing } = this.state;

    if (underEditing) {
      return (
        <div className="taskEditControls">
          <IconButton
            color="primary"
            onClick={ this.applyTitle }
          >
            <ApplyIcon fontSize="small" />
          </IconButton>

          <IconButton
            color="secondary"
            onClick={ this.disableEditMode }
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
          onClick={ this.enableEditMode }
        >
          <EditIcon fontSize="small" />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={ () => {} }
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    );
  }

  enableEditMode = () => {
    const { task } = this.state;

    this.setState({
      underEditing: true,
      nextTaskTitle: task.title
    });
  };

  disableEditMode = () => {
    this.setState({
      underEditing: false,
      nextTaskTitle: ''
    });
  };

  render() {
    return (
      <div className="task">
        { this.renderTask() }
        { this.renderTaskControl() }
      </div>
    );
  }
}

Task.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Task;
