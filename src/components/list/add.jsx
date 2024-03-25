import { useDispatch, useSelector } from 'react-redux';
import { addChangeFields, addClearFields, listAdd, listUpdate } from '../redux/actions.js';

export default function Add() {
  const dispatch = useDispatch();
  const { id, name,  price } = useSelector(state => state.add);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(addChangeFields(name, value));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch(listUpdate(id, name, price));
    } else {
      dispatch(listAdd(name, price));
    }
    dispatch(addClearFields());
  }

  const handleReset = e => {
    e.preventDefault();
    dispatch(addClearFields());
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>Name
        <input name='name' onChange={handleChange} value={name} />
      </label>
      <label>Price
        <input name='price' type="number" onChange={handleChange} value={price}/>
      </label>
      <button type='submit'>Save</button>
      {id && <button type='reset'>Cancel</button>}
    </form>
  );
}
