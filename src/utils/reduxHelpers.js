export const addPrefix = (prefix, name) => `${prefix}/${name}`;

export const selectNamespace = state => namespace => state[namespace];

export const createAction = type => (payload, status) => ({
  type,
  payload,
  status
});
