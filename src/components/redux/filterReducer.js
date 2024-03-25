import { FILTER_CHANGE_FIELDS } from './actions';

const initialState = {
  filter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CHANGE_FIELDS:
      const {name, value} = action.payload;
      return {
        ...state,
        [name]: value
      };
    default:
      return state;
  }
};

export default filterReducer;
