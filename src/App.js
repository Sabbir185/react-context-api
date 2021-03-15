import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);

  const style = {
    border: '2px solid tomato',
    borderRadius: '20px',
    margin: '20px',
    padding: '20px'
  }

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <header className="App-header">
        
        <h1 style={style}>App Category : {category}</h1>
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
        
      </header>
    </CategoryContext.Provider>
  );
}

export default App;
