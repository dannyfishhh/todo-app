import {addTodo} from '../../store/features/todo/todoSlice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const AddTodoForm = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            alert('Set a valid todo');
        } else {
            dispatch(addTodo({
                id: Math.random().toString(36).substr(2, 9),
                name: input
            }))
            setInput('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='New Todo'></input>
            <button type='submit'>
                Add
            </button>
        </form>
    );
}

export default AddTodoForm;