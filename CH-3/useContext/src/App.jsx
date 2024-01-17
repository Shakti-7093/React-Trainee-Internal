import { createContext, useState } from 'react';
import './App.css';
import English from './English';


const Language = createContext()

function App() {

  // const [data, setdata] = useState("english")
  const data = useState("english")
  // const [input, setinput] = useState(data)

  return (
    <>
      <Language.Provider value={data}>
      {/* <Language.Provider value={[input, setinput]}> */}
        <English />
      </Language.Provider>
    </>
  );
}

export default App;
export { Language }
