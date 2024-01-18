import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todosSlice';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Todos: React.FC = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.todos.status);
  const error = useSelector((state: RootState) => state.todos.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleNext = () => {
    history('/todo');
  };

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Todos;