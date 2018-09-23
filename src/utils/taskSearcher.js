export const search = (tasks, searchPattern) => {
  return tasks.filter(task => task.title.toLowerCase().includes(searchPattern.toLowerCase()));
};
