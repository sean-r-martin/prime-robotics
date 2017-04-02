'use strict';

const DUMMY_ACTION = 'DUMMY_ACTION';

const initialState = {};

export default function dummyReducer (state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case DUMMY_ACTION:
      newState.dummy = action.dummy;
      break;
    default:
      return state;
  }
  return newState;
}
