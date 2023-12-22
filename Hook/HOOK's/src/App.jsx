import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [count, setCount] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setCount(res.data);
    })
  },[]);

  return (
    <>
      <div className="container">
        <div className="content">
          {
            count.map((data)=>{
              return(
                <div key={data.id}>{data.name}</div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App