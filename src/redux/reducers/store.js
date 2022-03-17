import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {
  hotels, badservices, popupModel, ratedService, userInfo,
} from './reducers';
import rootSaga from '../saga';

const reducer = combineReducers({
  hotels, badservices, popupModel, ratedService, userInfo,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
