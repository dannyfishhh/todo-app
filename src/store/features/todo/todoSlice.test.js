
import todoReducer, { addTodo, clearTodos, deleteTodo, toggleInputForm, updateTodo } from './todoSlice';

describe('todoSlice', () => {
    const testInitialState = {
            todos: [
                {id: 1, name: 'wake up'},
                {id: 2, name: 'make coffee'},
                {id: 3, name: 'play tennis'}
            ],
            toggleForm: true,
            todoUpdate: {}
        };

    it('should have the expected default initial state', () => {
        const actualState = todoReducer(undefined, {});
        expect(actualState).toEqual(testInitialState);
    });

    it('should add a todo', () => {
        const newTodo = {id: 4, name: 'go to the gym'};
        const action = addTodo(newTodo);
        const actualState = todoReducer(testInitialState, action);
        expect(actualState.todos).toHaveLength(4);
        expect(actualState.todos[3]).toEqual(newTodo);
    })

    it('should clear all todos', () => {
        const action = clearTodos();
        const actualState = todoReducer(testInitialState, action);
        expect(actualState.todos).toHaveLength(0);
    })

    it('should delete a selected todo', () => {
        const todoToDelete = {id: 3, name: 'play tennis'};
        const action = deleteTodo(todoToDelete);
        const actualState = todoReducer(testInitialState, action);
        expect(actualState.todos).toHaveLength(2);
        expect(actualState.todos).not.toContain(todoToDelete);
    });

    it('should correctly toggle the state of toggleForm and set todoUpdate to the selected todo', () => {
        const todoToUpdate = {id: 3, name: 'play tennis'}
        const action = toggleInputForm(todoToUpdate);
        const actualState = todoReducer(testInitialState, action);
        expect(actualState.toggleForm).not.toBeTruthy();
        expect(actualState.todoUpdate).toEqual(todoToUpdate);
    });

    it('should update the name of a todo from its initial state without changing the id, then reset the toggleForm state', () => {
        const todoUpdate = {id: 3, name: 'play some tennis'};
        const specialTestInitialState = {
            todos: [
                {id: 1, name: 'wake up'},
                {id: 2, name: 'make coffee'},
                {id: 3, name: 'play tennis'}
            ],
            toggleForm: false,
            todoUpdate: {id: 3, name: 'play tennis'}
        };
        const action = updateTodo(todoUpdate);
        const actualState = todoReducer(specialTestInitialState, action);
        expect(actualState.todos[2].name).toEqual('play some tennis');
        expect(actualState.toggleForm).toBeTruthy();
    });
});