import { takeLatest, all } from 'redux-saga/effects';
import { LIST } from '../utils/constants/index';
import { getList } from './vehicle';

// Watchers for all application saga's
export default function* root() {
    yield all([
      takeLatest(LIST, getList)
    ]);
}
