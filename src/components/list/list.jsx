import { useDispatch, useSelector } from 'react-redux';
import { editChangeFields, listRemove } from '../redux/actions.js';

export default function List() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.list);
  const { id } = useSelector(state => state.add);
  const { filter } = useSelector(state => state.filter);

  const handleRemove = listItemId => {
    if (!id) dispatch(listRemove(listItemId));
  };

  const handleEdit = listItemId => {
    const item = items.find(o => o.id === listItemId);
    if (item) dispatch(editChangeFields(item));
  };

  return (
    <ul>
      {items
        .filter(o => o.name.search(`${filter}`) > -1)
        .map(o => (
        <li key={o.id}>
          Name {o.name} Price {o.price}
          <button onClick={() => handleEdit(o.id)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>&#10008;</button>
        </li>
      ))}
    </ul>
  )
}
