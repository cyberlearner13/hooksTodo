import React, {useState, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reducer from '../reducer/todoReducer';
import { actionTypes } from '../reducer/actionTypes';
import TodoList from "./TodoList";

const { Group, Control  } = Form;
const initialState = {todos: []};
const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setTodo] = useState('');
    const addTodo = e => {
        e.preventDefault();
        dispatch({ type: actionTypes.ADD_TODO, payload: todo});
        setTodo('');
    }

    const clearTodo = () => {
        dispatch({
            type: actionTypes.CLEAR_TODOS
        })
    }

    return (
        <>
           <Form onSubmit={e=> addTodo(e)}>
                <Group controlId="formBasicAddTodo">
                    <Row>
                        <Col md={8}><Control as='input' type="text" name="todo" value={todo} onChange={e => setTodo(e.target.value)}/></Col>
                        <Col md={2}><Button variant="primary" block onClick={addTodo}>Add</Button></Col>
                        <Col md={2}><Button variant="warning" block onClick={clearTodo}>Clear</Button></Col>
                    </Row>
                </Group>
            </Form>
            <TodoList todoData = {[state, dispatch]} />
        </>
    )
}

export default TodoForm;