import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_EXERCISE': 
      return { ...state, [action.payload.id]: action.payload };
    case 'FETCH_EXERCISES':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};