import React, { useReducer, useEffect } from 'react';

import './styles.css'
import { TodoAdd } from './TodoAdd.tsx';
import { TodoList } from './TodoList.tsx';
import { todoReducer } from './todoReducer.tsx';

const init = () => {
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender react',
  //   done: false
  // }]
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const handleDelete = (todoId: number) => {
    const todoAction = {
      type: 'delete',
      payload: todoId
    }
    dispatch(todoAction)
  }
  const handleToggle = (todoId: number) => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }

  return (
    <>
      <h1 className='text-center'>TodoApp ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-7' >
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  )

};
