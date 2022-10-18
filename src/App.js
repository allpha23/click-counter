import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => setCount(count + 1)}
      >
        <div className="container center">
          <h1 className="center">{count}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
