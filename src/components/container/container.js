import AddTodoForm from '../addTodoForm/addTodoForm';
import TodoContainer from '../todoContainer/todoContainer';
import UpdateTodoForm from '../updateTodoForm/updateToDoForm';
import { useSelector, useDispatch } from 'react-redux';
import {clearTodos} from '../../store/features/todo/todoSlice'

const Container = () => {
    const myTodos = useSelector((state) => state.todos.todos);
    const toggleForm = useSelector((state) => state.todos.toggleForm);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h1>My Todo List</h1>
            {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
            <ul className='todo-list'>
                {myTodos.map((todo) => {return <TodoContainer id={todo.id} name={todo.name}/>})}
            </ul>
            <button className='clear-button' onClick={() => dispatch(clearTodos())}>Clear</button>
        </div>
    )
}

export default Container;