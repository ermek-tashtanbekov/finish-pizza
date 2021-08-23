
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {setPizzas} from './store/action/pizzas'
function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://610126d34e50960017c29c33.mockapi.io/items')
     .then(({data}) => (
      //  console.log(data)
       dispatch(setPizzas(data))
     ))
  }, [dispatch])
  return (
    <div className="wrapper">
      <Header />
      <Home />
    </div>
  );
}

export default App;