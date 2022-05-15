import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div className="App">
      <input value={a} onChange={event => setA(parseInt(event.target.value))}/>
      <input value={b} onChange={event => setB(parseInt(event.target.value))}/>
      <span>{a + b}</span>
    </div>
  );
}

export default App;
