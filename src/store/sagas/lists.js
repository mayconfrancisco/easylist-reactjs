import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ListsActions } from '../ducks/lists';

export function* getLists() {
  try {
    const { data } = yield call(api.get, '/list?fat=y');

    yield put(ListsActions.getListsSuccess(data));
  } catch (err) {
    // TODO: add componente de erro em tela e criar um fluxo no redux
    console.log('ERROR', err);
    console.tron.log('ERROR', err);
  }
}

export function* addList(action) {
  try {
    const { data } = yield call(() => api.post('/list', { name: action.payload.name }));

    yield put(ListsActions.addListsSuccess(data));
  } catch (err) {
    console.log('ERROR', err);
    console.tron.log('ERROR', err);
  }
}

export function* addItem(action) {
  try {
    const { listId, name } = action.payload.data;
    const { data } = yield call(() => api.post(`/list/${listId}/item`, { name }));
    data.listId = listId;
    yield put(ListsActions.addItemSuccess(data));
  } catch (err) {
    console.log('ERROR', err);
    console.tron.log('ERROR', err);
  }
}

export function* addItemFinished(action) {
  try {
    const { id, listId, isFinished } = action.payload.data;
    yield call(() => api.put(`/list/${listId}/item/${id}`, { isFinished }));
    yield put(ListsActions.addItemFinishedSuccess({ isFinished, listId, id }));
  } catch (err) {
    console.log('ERROR', err);
    console.tron.log('ERROR', err);
  }
}
