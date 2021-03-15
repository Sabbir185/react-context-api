import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value='laptop'>
      <header className="App-header">
        
        <p>Count main app : {count}</p>
        <Header count={count} setCount={setCount}></Header>
        <Home count={count}></Home>
        <Shipment></Shipment>
        
      </header>
    </CategoryContext.Provider>
  );
}

export default App;
