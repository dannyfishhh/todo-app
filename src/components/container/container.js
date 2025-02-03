import AddTodoForm from '../addTodoForm/addTodoForm';
import UpdateTodoForm from '../updateTodoForm/updateToDoForm';

const Container = () => {
    return (
        <div>
            <h1>My Todo List</h1>
            <AddTodoForm />
            <UpdateTodoForm />
            <button>Clear</button>
        </div>
    )
}

export default Container;