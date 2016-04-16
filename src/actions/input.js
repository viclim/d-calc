export const UPDATE_INPUT = 'UPDATE_INPUT';

export function updateInput(id, value) {
  return {
    type: UPDATE_INPUT,
    meta: id,
    payload: value
  };
};
