
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { fetchPizzas } from './store/action/pizzas';
import {setPizzas} from './store/action/pizzas'
function App() {

  
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;