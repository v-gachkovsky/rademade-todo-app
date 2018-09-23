export const sortTasksByStatus = (tasks, direction = 'ASC') => {
  switch (direction) {
    case 'ASC':
      return tasks.sort((a, b) => a.status < b.status);
    case 'DESC':
      return tasks.sort((a, b) => a.status > b.status);
    default:
      return tasks;
  }
};
