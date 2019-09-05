import _ from 'lodash';

export default ( state = {}, action ) => {
  switch (action.type) {
    case 'CREATE_PROGRAM': 
      return { ...state, [action.payload.id]: action.payload };
    case 'FETCH_PROGRAMS': 
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'EDIT_PROGRAM':
        return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_PROGRAM':
      return _.omit(state, action.payload);
    default: 
      return state;
  }
};