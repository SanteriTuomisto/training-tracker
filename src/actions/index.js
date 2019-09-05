import api from '../apis/api';
import { reset } from 'redux-form';
import history from '../history';

export const createExercise = (formValues) => async (dispatch) => {
  const response = await api.post('/exercises', { ...formValues });

  dispatch({ type: 'CREATE_EXERCISE', payload: response.data });
  dispatch(reset('exerciseForm'));
};

export const fetchExercises = () => async dispatch => {
  const response = await api.get('/exercises');

  dispatch({ type: 'FETCH_EXERCISES', payload: response.data })
};

export const deleteExercise = (id) => async dispatch => {
  await api.delete(`/exercises/${id}`);

  dispatch({ type: 'DELETE_EXERCISE', payload: id });
};

export const fetchPrograms = () => async dispatch => {
  const response = await api.get('/programs');

  dispatch({ type: 'FETCH_PROGRAMS', payload: response.data })
};

export const createProgram = (data) => async (dispatch) => {
  const response = await api.post('/programs', { ...data });

  dispatch({ type: 'CREATE_PROGRAM', payload: response.data });
  history.push('/programs');
};

export const deleteProgram = (id) => async dispatch => {
  await api.delete(`/programs/${id}`);

  dispatch({ type: 'DELETE_PROGRAM', payload: id });
};

export const editProgram = (id, data) =>  async dispatch => {
  const response = await api.patch(`/programs/${id}`, data);

  dispatch({ type: 'EDIT_PROGRAM', payload: response.data });
  history.push('/programs');
};