import React, {useState, useReducer, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import reducer from '../reducer/todoReducer';
import { actionTypes } from '../reducer/actionTypes';

const { Group, Control  } = Form;
const initialState = {todos: []};
const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setTodo] = useState('');
    const addTodo = () => {
        dispatch({ type: actionTypes.ADD_TODO, payload: todo});
        setTodo('');
    }

    console.log(state)
    return (
        <Container className="mt-4">
           <Form>
                <Group controlId="formBasicAddTodo">
                    <Row>
                        <Col md={10}><Control as='input' type="text" name="todo" value={todo} onChange={e => setTodo(e.target.value)}/></Col>
                        <Col md={2}><Button variant="primary" block onClick={addTodo}>Add</Button></Col>
                    </Row>
                </Group>
            </Form>
        </Container>
    )
}

export default TodoForm;