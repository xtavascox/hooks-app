import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, i) => {
                        return (
                            <TodoListItem
                            key={todo.id} 
                            todo={todo} 
                            i={i} 
                            handleDelete={handleDelete} 
                            handleToggle={handleToggle}/>
                )
                    })
                }
            </ul>
        </>
    );
};
