import { all, takeLatest } from 'redux-saga/effects';

import { Types as ListsTypes } from '../ducks/lists';

import {
  getLists, addList, addItem, addItemFinished,
} from './lists';

export default function* rootSaga() {
  yield all([
    takeLatest(ListsTypes.GET_REQUEST, getLists),
    takeLatest(ListsTypes.ADD_LIST_REQUEST, addList),
    takeLatest(ListsTypes.ADD_ITEM_REQUEST, addItem),
    takeLatest(ListsTypes.ADD_ITEM_FINISHED_REQUEST, addItemFinished),
  ]);
}
