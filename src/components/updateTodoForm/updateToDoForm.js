import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {updateTodo} from '../../store/features/todo/todoSlice';

const UpdateToDoForm = () => {
    const todoForUpdate = useSelector(state => state.todos.todoUpdate);
    const [updated, setUpdated] = useState(todoForUpdate.name);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
            e.preventDefault();
            if (!updated) {
                alert('Set a valid todo');
                setUpdated('');
            } else {
                dispatch(updateTodo({
                    id: todoForUpdate.id,
                    name: updated
                }))
                setUpdated('');
            }
        }

    return (
        <form onSubmit={handleSubmit}>
            <input value={updated} onChange={(e) => setUpdated(e.target.value)} type='text' placeholder='Edit Todo'></input>
            <button type='submit'>
                Update
            </button>
        </form>
    );
}

export default UpdateToDoForm;