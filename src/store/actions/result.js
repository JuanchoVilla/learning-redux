import * as actionTypes from './actionTypes';

const saveResult = (counter) => (
  { type: actionTypes.STORE_RESULT,
    counter: counter }
)

export const storeResult = (counter) => (
  dispatch => {
    setTimeout(() => {
      dispatch(saveResult(counter))
    }, 2000);
  }
)

export const deleteResult = (id) => (
  { type: actionTypes.DELETE_RESULT,
    id: id }
)