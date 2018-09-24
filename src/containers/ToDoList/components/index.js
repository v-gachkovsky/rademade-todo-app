import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Paper from '@material-ui/core/Paper';

import LoadableComponent from '../../../components/LoadableComponent';
import Task from '../../../components/Task';
import SearchField from '../../../components/SearchField';
import TaskCreator from '../../../components/TaskCreator';
import TaskSorter from '../../../components/TaskSorter';

import * as actions from '../actions';
import { selectLoadingStatus, selectStatus, selectTasks } from '../selectors';

import { sortTasksByStatus } from '../../../utils/tasksSorter';
import { search } from '../../../utils/taskSearcher';

import './styles.css';

class ToDoList extends Component {
  state = {
    tasks: [],
    filteredTasks: [],
    prevTasks: [],
    sortDirection: 'ASC',
    searchPattern: ''
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevTasks !== nextProps.tasks) {
      return {
        tasks: sortTasksByStatus(nextProps.tasks),
        filteredTasks: search(nextProps.tasks, ''),
        prevTasks: nextProps.tasks,
        sortDirection: 'ASC',
        searchPattern: ''
      };
    }
    return null;
  }

  componentDidMount() {
    const { loadTasks } = this.props;
    loadTasks();
  }

  changeSearchPattern = e => {
    const { target: { value } } = e;

    this.setState({
      searchPattern: value
    }, () => {
      const { tasks, searchPattern } = this.state;

      this.setState({
        filteredTasks: search(tasks, searchPattern)
      });
    });
  };

  changeSortDirection = () => {
    const { sortDirection } = this.state;
    this.setState({
      sortDirection: sortDirection === 'ASC' ? 'DESC' : 'ASC'
    }, () => {
      this.makeTasksSorting();
    });
  };

  makeTasksSorting = () => {
    const { filteredTasks, sortDirection } = this.state;

    this.setState({
      filteredTasks: sortTasksByStatus(filteredTasks, sortDirection)
    });
  };

  handleUpdateTask = id => updateObject => {
    const { updateTask } = this.props;
    updateTask({ id, updateObject: { ...updateObject } });
  };

  handleCreateTask = title => {
    const { createTask } = this.props;
    createTask(title);
  };

  handleDeleteTask = id => () => {
    const { deleteTask } = this.props;
    deleteTask(id);
  };

  render() {
    const { loading, status } = this.props;
    const { filteredTasks, tasks, sortDirection, searchPattern } = this.state;

    if (status) return (
      <div>
        { status.message }
      </div>
    );

    return (
      <Paper className="ToDoListPaper">
        <div className="SearchFieldContainer">
          <SearchField
            width={ 350 }
            searchPattern={ searchPattern }
            changeSearchPattern={ this.changeSearchPattern }
            isLoading={ loading }
          />
          <TaskSorter
            changeSortDirection={ this.changeSortDirection }
            sortDirection={ sortDirection }
          />
        </div>
        <div>
          <LoadableComponent isLoading={ loading }>
            <ul>
              { tasks.length === 0 && (
                <span className="emptyListMessage">
                  You have got an empty tasks list. Do you want to create a new one?
                </span>
              ) }
              { filteredTasks.length === 0 && (
                <span className="emptyListMessage">
                  No tasks found.
                </span>
              ) }
              { filteredTasks.length > 0 && filteredTasks.map(task => (
                <li className="tasksListItem" key={ task.id }>
                  <Task
                    task={ task }
                    onUpdateTask={ this.handleUpdateTask(task.id) }
                    onDeleteTask={ this.handleDeleteTask(task.id) }
                  />
                </li>
              )) }
            </ul>
          </LoadableComponent>
        </div>
        <div className="TaskCreatorContainer">
          <TaskCreator isLoading={ loading } createTask={ this.handleCreateTask } />
        </div>
      </Paper>
    );
  }
}

ToDoList.propTypes = {
  loading: PropTypes.bool,
  status: PropTypes.object,

  loadTasks: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

const mapStateToProps = () => createStructuredSelector({
  tasks: selectTasks(),
  loading: selectLoadingStatus(),
  status: selectStatus()
});

const mapDispatchToProps = {
  loadTasks: actions.fetchTasks,
  createTask: actions.createTask,
  updateTask: actions.updateTask,
  deleteTask: actions.deleteTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
