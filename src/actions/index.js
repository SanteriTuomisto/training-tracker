import api from '../apis/api';
import { reset } from 'redux-form';

export const createExercise = (formValues) => async (dispatch) => {
  const response = await api.post('/exercises', { ...formValues });

  dispatch({ type: 'CREATE_EXERCISE', payload: response.data });
  dispatch(reset('exerciseForm'));
};

export const fetchExercises = () => async dispatch => {
  const response = await api.get('/exercises');

  dispatch({ type: 'FETCH_EXERCISES', payload: response.data })
};

export const fetchPrograms = () => async dispatch => {
  const response = await api.get('/programs');

  dispatch({ type: 'FETCH_PROGRAMS', payload: response.data })
};

export const createProgram = (formValues) => async (dispatch) => {
  const response = await api.post('/programs', { ...formValues });

  dispatch({ type: 'CREATE_PROGRAM', payload: response.data });
  dispatch(reset('programForm'));
};
