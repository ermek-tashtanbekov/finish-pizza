
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('https://610126d34e50960017c29c33.mockapi.io/items')
      .then((response) => {
        console.log(response)
        setItems(response.data)
      })
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <Home items={items}/>
    </div>
  );
}

export default App;
