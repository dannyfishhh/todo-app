import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [
        {id:1, name: 'wake up'},
        {id:2, name: 'make coffee'},
        {id:3, name: 'play tennis'}
        ],
        toggleForm: true,
        todoUpdate: {}
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        clearTodos: (state, action) => {
            state.todos = [];
        },
        deleteTodo: (state, action) => {
            const {id} = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id);
        }
    }
})

export default todoSlice.reducer
export const {addTodo, clearTodos, deleteTodo} = todoSlice.actions;