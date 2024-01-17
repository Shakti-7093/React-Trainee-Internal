import { useRef } from 'react';
import Input from './components/Input';

const App = () => {
  const inputRef = useRef(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button onClick={focus}>Focus</button>
      <Input ref={inputRef} />
    </div>
  );
};

export default App;