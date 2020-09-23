import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import exerciseReducer from './exerciseReducer';
import programReducer from './programReducer';
import workoutReducer from './workoutReducer';

export default combineReducers({
  exercises: exerciseReducer,
  programs: programReducer,
  workouts: workoutReducer,
  form: formReducer
});