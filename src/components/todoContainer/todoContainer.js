import { useState } from 'react';
import {deleteTodo, toggleInputForm } from '../../store/features/todo/todoSlice';
import {useDispatch} from 'react-redux';

const TodoContainer = (props) => {
    const [done, setDone] = useState(false);
    const {name, id} = props;
    const dispatch = useDispatch();
    return (
        <div>
            <li>
                <p style={{ textDecoration: done ? 'line-through' : 'none' }}>{name}</p>
                <button onClick={() => setDone(!done)}>Done</button>
                <button onClick={() => dispatch(toggleInputForm({id, name}))}>Edit</button>
                <button onClick={() => dispatch(deleteTodo({id}))}>Remove</button>
            </li>
        </div>
    );
};

export default TodoContainer;