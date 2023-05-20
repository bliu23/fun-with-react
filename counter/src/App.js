import {useState} from 'react'
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="App">
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {counter}
    </div>
  );
}

export default App;
