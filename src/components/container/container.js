import AddTodoForm from '../addTodoForm/addTodoForm';
import TodoContainer from '../todoContainer/todoContainer';
import UpdateTodoForm from '../updateTodoForm/updateToDoForm';
import { useSelector, useDispatch } from 'react-redux';
import {clearTodos} from '../../store/features/todo/todoSlice'

const Container = () => {
    const myTodos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>My Todo List</h1>
            <AddTodoForm />
            {/* <UpdateTodoForm /> */} 
            <ul>
                {myTodos.map((todo) => {return <TodoContainer id={todo.id} name={todo.name}/>})}
            </ul>
            <button onClick={() => dispatch(clearTodos())}>Clear</button>
        </div>
    )
}

export default Container;