import React from 'react';
import { CheckCircleFill, CheckCircle, Trash, Pen } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import { actionTypes } from '../reducer/actionTypes';
const TodoList = ({todoData}) => {
    const [state, dispatch] = todoData;
    // add functions
    const toggleTodoComplete = id => {
        dispatch({ type: actionTypes.COMPLETE_TODO, payload: id })
    }

    const todoEdit = () => {

    }

    const todoDelete = id => {
        dispatch({ type: actionTypes.DELETE_TODO, payload: id })
    }
  
    return (
        <Container className="p-3 rounded">
            {state.todos.map(({todo_id, name, complete}) => (
                <div key={todo_id} style={{ cursor: 'pointer'}} className="p-2 d-flex justify-content-start border rounded m-3">
                    <div className="mr-2">{name}-{todo_id}</div>
                    <div>
                        {complete ? <CheckCircleFill className="ml-3" onClick={() => toggleTodoComplete(todo_id)} /> : <CheckCircle className="ml-3" onClick={() => toggleTodoComplete(todo_id)}/>}
                        <Pen className="ml-3" onClick={todoEdit}/>
                        <Trash className="ml-3" onClick={() => todoDelete(todo_id)}/>
                    </div>
                </div>
                )
            )}
        </Container>
    );
}

export default TodoList;