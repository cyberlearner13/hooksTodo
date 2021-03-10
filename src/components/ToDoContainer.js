import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoAppContainer = () => {
    return (
    <div>
        <TodoForm />
        <TodoList />
    </div>);
}

export default TodoAppContainer;