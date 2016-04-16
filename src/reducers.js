import assign from 'object-assign';
import { combineReducers } from 'redux';

import { UPDATE_INPUT } from './actions/input';

function input(state = { value: 0 }, action) {
  switch (action.type) {
  case UPDATE_INPUT:
    return assign({}, state, { value: action.payload });
  default:
    return state;
  }
}

function inputs(state = {}, action) {
  switch (action.type) {
  case UPDATE_INPUT:
    return assign({}, state, { [action.meta]: input(state[action.meta], action) });
  default:
    return state;
  }
}

const reducer = combineReducers({
  inputs
});

export default reducer;
