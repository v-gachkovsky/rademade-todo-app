import { createSelector } from 'reselect';
import { NAMESPACE } from '../../constants';
import { selectNamespace } from '../../utils/reduxHelpers';

const selectTasks = () => createSelector(
  state => selectNamespace(state)(NAMESPACE),
  namespace => namespace.tasks
);

const selectLoadingStatus = () => createSelector(
  state => selectNamespace(state)(NAMESPACE),
  namespace => namespace.loading
);

const selectStatus = () => createSelector(
  state => selectNamespace(state)(NAMESPACE),
  namespace => namespace.status
);

export {
  selectTasks,
  selectLoadingStatus,
  selectStatus
};
