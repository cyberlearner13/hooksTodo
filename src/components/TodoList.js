import React, {useState} from 'react';
import { CheckCircleFill, CheckCircle, Trash, Pen, BagCheck, BagX } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { actionTypes } from '../reducer/actionTypes';

const { Group, Control  } = Form;
const TodoList = ({todoData}) => {
    const [state, dispatch] = todoData;
    const [isEdit, setIsEdit] = useState(false);
    const [id, setId] = useState('');
    const [edited, setEdited] = useState('')
    // add functions
    const toggleTodoComplete = id => {
        dispatch({ type: actionTypes.COMPLETE_TODO, payload: id })
    }

    const todoEdit = todo_id => {
        setId(todo_id);
        setIsEdit(true);
    }

    const editedTodo = todo => {
        setEdited(todo);
    }

    const editTodo = id => {
        dispatch({
            type: actionTypes.EDIT_TODO,
            payload: {
                edited, 
                id
            }
        });
        closeEdit();
    }

    const closeEdit = () => {
        setIsEdit(false);
    }

    const todoDelete = id => {
        dispatch({ type: actionTypes.DELETE_TODO, payload: id })
    }
  
    return (
        <Container className="p-3 rounded">
            {state.todos.map(({todo_id, name, complete}) => (
                <div key={todo_id} style={{ cursor: 'pointer'}} className="p-2 d-flex justify-content-start border rounded m-3">
                    { isEdit && id === todo_id ? 
                    <Form>
                        <Group controlId="formBasicEditTodo">
                            <Row>
                                <Col md={8}><Control as='input' type="text" defaultValue={name} onChange={e => editedTodo(e.target.value)}/></Col>
                                <Col md={2}><BagCheck onClick={() => editTodo(todo_id)} style={{fontSize: "25px"}}></BagCheck></Col>
                                <Col md={2}><BagX onClick={closeEdit} style={{fontSize: "25px"}}></BagX></Col>
                            </Row>
                        </Group>
                    </Form>
                    
                    : <><div className="mr-2">{name}</div>
                    <div>
                        {complete ? <CheckCircleFill className="ml-3" onClick={() => toggleTodoComplete(todo_id)} /> : <CheckCircle className="ml-3" onClick={() => toggleTodoComplete(todo_id)}/>}
                        <Pen className="ml-3" onClick={() => todoEdit(todo_id)}/>
                        <Trash className="ml-3" onClick={() => todoDelete(todo_id)}/>
                    </div></> }
                </div>
                )
            )}
        </Container>
    );
}

export default TodoList;