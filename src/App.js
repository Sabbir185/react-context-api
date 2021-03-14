import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Header></Header>
        <Home></Home>
        <Shipment></Shipment>
        
      </header>
    </div>
  );
}

export default App;
