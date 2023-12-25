import React, { useState } from 'react'
import Todo from './Components/Todo';

function App() {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const counts = () => {
    setCount(count + 1)
  }

  const addTodo = () => {
    setTodos((data) => [...data, `new Entry`]);
    console.log('recorded');
  }

  return (
    <>
      <Todo todos={todos} addTodo={addTodo}/>
      <h6>{count}</h6>
      <button onClick={counts}>+</button>
    </>
  )
}

export default App