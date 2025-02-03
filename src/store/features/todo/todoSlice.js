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
        clearTodos: (state) => {
            state.todos = [];
        },
        deleteTodo: (state, action) => {
            const {id} = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        toggleInputForm: (state, action) => {
            const {id, name} = action.payload
            state.toggleForm = !state.toggleForm;
            state.todoUpdate = { id, name }
        },
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.name = name;
            }
            state.toggleForm = !state.toggleForm;
        }
    }
})

export default todoSlice.reducer
export const {addTodo, clearTodos, deleteTodo, toggleInputForm, updateTodo} = todoSlice.actions;