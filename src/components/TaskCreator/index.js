import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TaskCreator extends PureComponent {
  state = {
    newTaskTitle: ''
  };

  changeNewTitle = e => {
    this.setState({
      newTaskTitle: e.target.value
    });
  };

  handleCreateTask = title => {
    const { createTask } = this.props;
    createTask(title.trim());

    this.setState({
      newTaskTitle: ''
    });
  };

  render() {
    const { isLoading } = this.props;
    const { newTaskTitle } = this.state;

    return (
      <Fragment>
        <TextField
          value={ newTaskTitle }
          label="Task Title"
          onChange={ this.changeNewTitle }
          disabled={ isLoading }
        />
        <Button
          color="primary"
          onClick={ () => this.handleCreateTask(newTaskTitle) }
          disabled={ isLoading || newTaskTitle === '' }
        >
          Add Task
        </Button>
      </Fragment>
    );
  }
}

TaskCreator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  createTask: PropTypes.func.isRequired
};

export default TaskCreator;
