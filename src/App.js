import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Count main app : {count}</p>
        <Header count={count} setCount={setCount}></Header>
        <Home count={count}></Home>
        <Shipment></Shipment>
        
      </header>
    </div>
  );
}

export default App;
