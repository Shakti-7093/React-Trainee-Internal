import { memo } from 'react'

function Todo({ todos, addTodo }) {
    console.log("Child Rendered");
  return (
    <>
        <h1>MY TODOS</h1>
        {
            todos.map((todo, index) => {
                return <p key={index}>{todo+index}</p>
            })
        }
        <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

export default memo(Todo);