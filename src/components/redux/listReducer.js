import { LIST_ADD, LIST_REMOVE, LIST_UPDATE } from './actions';
import { v4 } from 'uuid';

const initialState = [];

const listReducer = (state = initialState, action) => {
  const { id, name, price } = { ...action.payload };

  switch (action.type) {
    case LIST_ADD:
      return [
        ...state,
        {
          id: v4(),
          name: name,
          price: price
        }
      ];
    case LIST_UPDATE:
      const newState = state.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            name: name,
            price: price
          };
        } else
          return el;
      });
      return newState;
    case LIST_REMOVE:
      return state.filter(el => el.id !== id);
    default:
      return state;
  }
};

export default listReducer;
