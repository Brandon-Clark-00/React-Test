import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('http://192.168.1.41:5000/data', 
    {method: 'GET',
     mode : 'cors'})
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
          {data ? <pre>{JSON.stringify(data, null,2)}</pre> : 'Loading...'}
        </div>
      </header>
    </div>
  );
}

export default App;
