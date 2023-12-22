import { useState } from 'react';
import './App.css';

function App(){

  const [them, setThem] = useState('Light');
  
  document.body.className = them;

  const btnValue = () => {
    if(them === 'Light'){
      setThem('Dark');
    }else{
      setThem('Light')
    }
  }

  return (
    <>
      <div className='container'>
        <div className="them-display">
          <h1>Them</h1>
          <button id='them' onClick={btnValue}>{them}</button>
        </div>
      </div>
      <div className="content">
        <div className="box">useState</div>
        <div className="box">useEffect</div>
        <div className="box">useProp</div>
      </div>
    </>
  )
}

export default App;