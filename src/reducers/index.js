import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import { reducer as fromReducer } from 'redux-form'


export default combineReducers({
  auth: authReducer,
  form: fromReducer,
  stream: streamReducer
});