import * as types from '../actions';

const initialState = { results: [] }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.STORE_RESULT:
      return { ...state,
        results: state.results.concat({id: new Date(), value: action.counter}) }
    case types.DELETE_RESULT:
      const newArray = state.results.filter(el => el.id !== action.id)
      return { ...state,
        results: newArray }
    default: break;
  }
  return state;
}

export default reducer;