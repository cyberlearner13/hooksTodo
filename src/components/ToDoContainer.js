import React from 'react';
import TodoForm from "./TodoForm";
import Container from 'react-bootstrap/Container';

const TodoAppContainer = () => {
    return (
        <Container className="mt-4">
            <TodoForm />
        </Container>
    );
}

export default TodoAppContainer;