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