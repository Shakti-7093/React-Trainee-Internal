import { Route, Routes } from 'react-router-dom';
import Todos from './components/Todos';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
