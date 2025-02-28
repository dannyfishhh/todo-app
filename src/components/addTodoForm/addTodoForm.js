import {addTodo} from '../../store/features/todo/todoSlice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import addLogo from '../../resources/add_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';

const AddTodoForm = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            alert('Set a valid todo');
            setInput('');
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
                <img src={addLogo} alt='add logo'/>
            </button>
        </form>
    );
}

export default AddTodoForm;