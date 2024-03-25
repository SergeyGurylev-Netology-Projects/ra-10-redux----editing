import './App.css'
import { Provider } from 'react-redux';
import configureStore from './components/redux/store.js';
import List from './components/list/list.jsx';
import Add from './components/list/add.jsx';
import Filter from './components/list/filter.jsx';

export default function App() {

  return (
    <Provider store={configureStore()}>
      <Filter />
      <Add />
      <List />
    </Provider>
  )
}
