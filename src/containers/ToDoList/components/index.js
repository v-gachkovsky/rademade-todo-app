import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Paper from '@material-ui/core/Paper';

import LoadableComponent from '../../../components/LoadableComponent';
import Task from '../../../components/Task';
import SearchField from '../../../components/SearchField';
import TaskCreator from '../../../components/TaskCreator';

import * as actions from '../actions';
import { selectLoadingStatus, selectStatus, selectTasks } from '../selectors';

import './styles.css';

export class ToDoList extends Component {
  state = {
    tasks: [],
    prevTasks: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevTasks !== nextProps.tasks) {
      return {
        tasks: nextProps.tasks,
        prevTasks: nextProps.tasks
      };
    }
    return null;
  }

  componentDidMount() {
    const { loadTasks } = this.props;
    loadTasks();
  }

  onChange = id => event => {
    const { tasks } = this.state;
    const { checked } = event.target;

    this.setState({
      tasks: tasks.map(task => {
        return task.id === id
          ? { ...task, status: checked }
          : task;
      })
    });
  };

  createTask = title => {
    const { createTask } = this.props;
    createTask(title);
  };

  render() {
    const { loading, status } = this.props;
    const { tasks } = this.state;

    if (status) return (
      <div>
        { status.message }
      </div>
    );

    return (
      <Paper className="ToDoListPaper">
        <div className="SearchFieldContainer">
          <SearchField width={ 350 } isLoading={ loading } />
        </div>
        <div>
          <LoadableComponent isLoading={ loading }>
            <ul>
              { tasks.length > 0 && tasks.map(task => (
                <li className="tasksListItem" key={ task.id }>
                  <Task task={ task } onChange={ this.onChange(task.id) } />
                </li>
              )) }
            </ul>
          </LoadableComponent>
        </div>
        <div className="TaskCreatorContainer">
          <TaskCreator isLoading={ loading } createTask={ this.createTask } />
        </div>
      </Paper>
    );
  }
}

ToDoList.propTypes = {
  loading: PropTypes.bool,
  status: PropTypes.object,

  loadTasks: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired
};

const mapStateToProps = () => createStructuredSelector({
  tasks: selectTasks(),
  loading: selectLoadingStatus(),
  status: selectStatus()
});

const mapDispatchToProps = {
  loadTasks: actions.fetchTasks,
  createTask: actions.createTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
