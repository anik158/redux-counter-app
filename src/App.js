import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';

function App() {

  const count = useSelector(state => state.count);

  const dispatch = useDispatch();
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>Count : {count}</h2>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
