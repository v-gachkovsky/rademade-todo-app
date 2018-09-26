import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TaskControls from '../TaskControls';
import ConfirmationDialog from '../ConfirmationDialog';

import './styles.css';

class Task extends PureComponent {
  state = {
    deleteConfirmationOpen: false,
    nextTaskTitle: '',
    underEditing: false
  };

  handleClickOpen = () => {
    this.setState({ deleteConfirmationOpen: true });
  };

  handleConfirmDeleting = () => {
    this.handleClose();
    this.deleteTask();
  };

  handleClose = () => {
    this.setState({ deleteConfirmationOpen: false });
  };

  toggleStatus = e => {
    const { task, onUpdateTask } = this.props;

    const updatedTask = { ...task, status: e.target.checked };
    delete updatedTask.id;

    const { id } = task;
    onUpdateTask(id, updatedTask);
  };

  renameTitle = () => {
    const { task, onUpdateTask } = this.props;
    const { nextTaskTitle } = this.state;

    const title = nextTaskTitle.trim();

    if (!title) {
      this.disableEditMode();
      return;
    }

    const updatedTask = { ...task, title };
    delete updatedTask.id;

    const { id } = task;
    onUpdateTask(id, updatedTask);

    this.disableEditMode();
  };

  deleteTask = () => {
    const { task: { id }, onDeleteTask } = this.props;
    onDeleteTask(id);
  };

  enableEditMode = () => {
    const { task } = this.props;

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

  renderTask() {
    const { task } = this.props;
    const { nextTaskTitle, underEditing } = this.state;

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
        control={ <Checkbox color="primary" checked={ task.status } onChange={ this.toggleStatus } />
        }
        label={ task.title }
      />
    );
  }

  render() {
    const { task } = this.props;
    const { deleteConfirmationOpen, underEditing } = this.state;

    const deleteConfirmationMessage = `Are you sure do you want to delete task "${task.title}"?`;
    return (
      <div className="task">
        { this.renderTask() }

        <TaskControls
          underEditing={ underEditing }
          enableEditMode={ this.enableEditMode }
          disableEditMode={ this.disableEditMode }
          renameTitle={ this.renameTitle }
          deleteTask={ this.handleClickOpen }
        />

        <ConfirmationDialog
          open={ deleteConfirmationOpen }
          title="Delete Confirmation"
          message={ deleteConfirmationMessage }
          handleClose={ this.handleClose }
          handleAgree={ this.handleConfirmDeleting }
        />
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object,
  onUpdateTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default Task;
