import * as types from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = { results: [] };

const deleteResult = (state, action) => (
  updateObject(state, {results: state.results.filter(el => el.id !== action.id)})
)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(), value: action.counter})});
    case types.DELETE_RESULT : return deleteResult(state, action);
    default: break;
  }
  return state;
}

export default reducer;