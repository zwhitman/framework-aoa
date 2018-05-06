import { createStore } from 'redux';

const reducer = function(state, action) {
  if (action.type === "INC") {
    return state = state+action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

export default store;
