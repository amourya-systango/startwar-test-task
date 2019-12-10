// List action to dispatch the list data
import { LIST, LIST_SUCCESS, LIST_FAILURE } from '../utils/constants/index';

export function list(list) {
  return {
    type: LIST,
    list
  };
}

export function listSuccess(list) {
  return {
    type: LIST_SUCCESS,
    list,
  };
}

export function listFailure(list) {
  return {
    type: LIST_FAILURE,
    list
  };
}
