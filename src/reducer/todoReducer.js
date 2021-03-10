import { actionTypes } from './actionTypes.js';

const addNewTodo = todo => {
    return {id: new Date(), todo, complete: false};
}
const reducer = (state, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO: return [...state.todos, addNewTodo(action.payload)];
        default: return state;
    }
}

export default reducer;