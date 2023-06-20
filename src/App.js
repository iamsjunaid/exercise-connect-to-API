import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <Provider store={store}>
       <ListUsers />
    </Provider>
  );
}

export default App;
