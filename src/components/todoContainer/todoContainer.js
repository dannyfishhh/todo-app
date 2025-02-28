import { useState } from 'react';
import {deleteTodo, toggleInputForm } from '../../store/features/todo/todoSlice';
import {useDispatch} from 'react-redux';
import check from '../../resources/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import edit from '../../resources/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import remove from '../../resources/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';

const TodoContainer = (props) => {
    const [done, setDone] = useState(false);
    const {name, id} = props;
    const dispatch = useDispatch();
    return (
        <div className='todo-individual-item'>
            <li>
                <p style={{ textDecoration: done ? 'line-through' : 'none' }}>{name}</p>
                <div className='buttons'>
                <button onClick={() => setDone(!done)}><img src={check}/></button>
                <button onClick={() => dispatch(toggleInputForm({id, name}))}><img src={edit}/></button>
                <button onClick={() => dispatch(deleteTodo({id}))}><img src={remove}/></button>
                </div>
            </li>
        </div>
    );
};

export default TodoContainer;