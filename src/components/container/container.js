import AddTodoForm from '../addTodoForm/addTodoForm';
import TodoContainer from '../todoContainer/todoContainer';
import UpdateTodoForm from '../updateTodoForm/updateToDoForm';
import { useSelector } from 'react-redux';

const Container = () => {
    const myTodos = useSelector((state) => state.todos.todos);
    return (
        <div>
            <h1>My Todo List</h1>
            <AddTodoForm />
            {/* <UpdateTodoForm /> */} 
            <ul>
                {myTodos.map((todo) => {return <TodoContainer key={todo.id} name={todo.name}/>})}
            </ul>
            <button>Clear</button>
        </div>
    )
}

export default Container;