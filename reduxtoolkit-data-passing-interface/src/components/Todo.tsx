import { useSelector } from 'react-redux';

function Todo() {
    const todos = useSelector((state:RouteState) => state.todos.todos);
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo:Todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo