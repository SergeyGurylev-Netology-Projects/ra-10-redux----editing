import { useDispatch, useSelector} from 'react-redux';
import {filterChangeFields} from "../redux/actions.js";

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(filterChangeFields(name, value));
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleReset = e => {
    e.preventDefault();
    dispatch(filterChangeFields('filter', ''));
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <label>Filter
        <input name='filter'onChange={handleChange}  value={filter} />
      </label>
      <button type='reset'>Reset filter</button>
    </form>
  );
}
