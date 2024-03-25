export const ADD_CLEAR_FIELD = 'ADD_CLEAR_FIELD';
export const ADD_CHANGE_FIELD = 'ADD_CHANGE_FIELD';
export const EDIT_CHANGE_FIELDS = 'EDIT_CHANGE_FIELDS';
export const LIST_UPDATE = 'LIST_UPDATE';
export const LIST_ADD = 'LIST_ADD';
export const LIST_REMOVE = 'LIST_REMOVE';
export const FILTER_CHANGE_FIELDS = 'FILTER_CHANGE_FIELDS';

export default {
  ADD_CLEAR_FIELD,
  ADD_CHANGE_FIELD,
  EDIT_CHANGE_FIELDS,
  LIST_UPDATE,
  LIST_ADD,
  LIST_REMOVE,
  FILTER_CHANGE_FIELDS
};

export const addClearFields = (name, value) => {
  return {
    type: ADD_CLEAR_FIELD
  };
}

export const addChangeFields = (name, value) => {
  return {
    type: ADD_CHANGE_FIELD,
    payload: {name: name, value: value}
  };
}

export const editChangeFields = (item) => {
  return {
    type: EDIT_CHANGE_FIELDS,
    payload: {...item}
  };
}

export const listAdd = (name, price) => {
  return {
    type: LIST_ADD,
    payload: {name: name, price: price}
  };
}

export const listUpdate = (id, name, price) => {
  return {
    type: LIST_UPDATE,
    payload: {id: id, name: name, price: price}
  };
}

export const listRemove = (id) => {
  return {
    type: LIST_REMOVE,
    payload: {id: id}
  };
}
export const filterChangeFields = (name, value) => {
  return {
    type: FILTER_CHANGE_FIELDS,
    payload: {name: name, value: value}
  };
}
