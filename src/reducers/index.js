import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exerciseReducer from './exerciseReducer';
import programReducer from './programReducer';

export default combineReducers({
  exercises: exerciseReducer,
  programs: programReducer,
  form: formReducer
});