// List reducer to update the data for list
import { LIST, LIST_SUCCESS, LIST_FAILURE } from '../utils/constants/index';

const initialState = {
  list: [],
  message: ''
};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case LIST:
      return {
        ...state,
        message: LIST,
      };
    case LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        message: LIST_SUCCESS,
      };
    case LIST_FAILURE:
      return {
        ...state,
        list: [],
        message: LIST_FAILURE,
      };
    default:
      return state;
  }
}

export default {
  listReducer
};