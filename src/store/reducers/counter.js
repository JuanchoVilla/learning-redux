import * as types from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = { counter: 0 }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT : return updateObject(state, {counter: state.counter + 1});
    case types.DECREMENT : return updateObject(state, {counter: state.counter - 1});
    case types.ADD : return updateObject(state, {counter: state.counter + action.value})
    case types.SUBTRACT : return updateObject(state, {counter: state.counter - action.value})
    default: break;
  }
  return state;
}

export default reducer;