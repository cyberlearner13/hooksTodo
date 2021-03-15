import { actionTypes } from './actionTypes.js';

const addNewTodo = todo => {
    return {todo_id: new Date().getUTCMilliseconds(), name: todo, complete: false};
}
const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO: return {...state, todos: [...state.todos, addNewTodo(action.payload)] };
        case actionTypes.COMPLETE_TODO: {
            const { todos } = state;
            const newTodo = todos.filter(todo => todo.todo_id === action.payload)[0];
            const rest = todos.filter(todo => todo.todo_id !== action.payload);
            const changedTodo = {...newTodo};
            let { complete } = newTodo;
            changedTodo.complete = !complete;
            return {...state, todos: [...rest, changedTodo] };
        } 
        case actionTypes.EDIT_TODO: {
            const { todos } = state;
            const newTodo = todos.filter(todo => todo.todo_id === action.payload.id)[0];
            const rest = todos.filter(todo => todo.todo_id !== action.payload.id);
            const changedTodo = {...newTodo};
            changedTodo.name = action.payload.edited;
            return {...state, todos: [...rest, changedTodo] };
        }
        case actionTypes.DELETE_TODO: return {...state, todos: [...state.todos.filter(todo => todo.todo_id !== action.payload)] };
        case actionTypes.CLEAR_TODOS: return {todos: []}

        default: return state;
    }
}

export default reducer;