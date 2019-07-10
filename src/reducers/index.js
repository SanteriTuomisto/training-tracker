import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exerciseReducer from './exerciseReducer';

export default combineReducers({
  exercises: exerciseReducer,
  form: formReducer
});