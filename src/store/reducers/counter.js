import * as types from '../actions/actionTypes';

const initialState = { counter: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case types.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case types.ADD:
      return { ...state, counter: state.counter + action.value };
    case types.SUBTRACT:
      return { ...state, counter: state.counter - action.value };
    default: break;
  }
  return state;
}

export default reducer;