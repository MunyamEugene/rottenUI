import {hotels,badservices,popup,ratedService,userReducer} from './reducers';
import createSagaMiddleware from '@redux-saga/core'
import {applyMiddleware,createStore,combineReducers} from 'redux';
import rootSaga from '../saga'

const reducer = combineReducers({hotels,badservices,popup,ratedService,userReducer});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;

