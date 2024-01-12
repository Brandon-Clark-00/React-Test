import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://dummyjson.com/products', 
    {method: 'GET'
    })
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {data ? <pre>{JSON.stringify(data, null,2)}</pre> : 'Loading...'}
        </div>
      </header>
    </div>
  );
}

export default App;
