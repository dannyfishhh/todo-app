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
        }
    }
})

export default todoSlice.reducer
export const {addTodo} = todoSlice.actions;