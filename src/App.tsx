import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" onClick={() => setCount(count + 1)}>
      {count}
    </div>
  );
}

export default App;
