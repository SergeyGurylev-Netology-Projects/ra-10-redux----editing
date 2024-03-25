import {ADD_CHANGE_FIELD, ADD_CLEAR_FIELD, EDIT_CHANGE_FIELDS} from './actions';

const initialState = {
  id: null,
  name: '',
  price: 0,
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLEAR_FIELD:
      return {
        id: null,
        name: '',
        price: 0,
      }
    case ADD_CHANGE_FIELD:
      const {name, value} = action.payload;
      return {
        ...state,
        [name]: value
      };
    case EDIT_CHANGE_FIELDS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default addReducer;
