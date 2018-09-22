import React, { Component, Fragment } from 'react';

export class ToDoList extends Component {
  state = {
    tasks: null
  };

  render() {
    const { tasks } = this.state;

    return (
      <Fragment>
        <ul>
          { tasks && tasks.map(task => (
            <li key={ task.id }>
              { task.title }
            </li>
          )) }
        </ul>
      </Fragment>
    );
  }
}

export default ToDoList;
