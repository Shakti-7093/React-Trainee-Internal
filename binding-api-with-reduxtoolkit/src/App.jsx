import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('State', state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todo</button>
      {
        state.todo.data?.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.completed}</p>
          </div>
        ))
      }
    </>
  );
}

export default App;
