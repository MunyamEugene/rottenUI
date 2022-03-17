import { call, put, takeEvery } from 'redux-saga/effects';
import { defaultUser } from '../helper/initstate';
import { success_auth, success_fetch_hotels, success_fetch_services } from './actions/actions';
import actionNames from './actions/actionTypes';
import { getData, createVote } from './sagaApi/apiCall';

function* fetchHotels(action) {
  const hotles = yield call(getData, action.url);
  yield put(success_fetch_hotels(hotles));
}

function* fetchServices(action) {
  const services = yield call(getData, action.url);
  yield put(success_fetch_services(services));
}

function* authenticate(action) {
  const authData = yield call(getData, action.url);
  yield put(success_auth(authData));
}

function* logout(action) {
  yield call(getData, action.url);
  yield put(success_auth(defaultUser));
}

function* vote(action) {
  yield call(createVote, action.url, action.vote);
}

function* watcher() {
  yield takeEvery(actionNames.VOTE, vote);
  yield takeEvery(actionNames.FETCH_HOTELS, fetchHotels);
  yield takeEvery(actionNames.FETCH_SERVICES, fetchServices);
  yield takeEvery(actionNames.AUTH, authenticate);
  yield takeEvery(actionNames.LOGOUT, logout);
}

export default watcher;
