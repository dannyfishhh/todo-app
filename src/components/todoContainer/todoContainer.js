const TodoContainer = (props) => {
    const {name} = props;
    return (
        <div>
            <li>
                <p>{name}</p>
                <button>Done</button>
                <button>Edit</button>
                <button>Remove</button>
            </li>
        </div>
    )
}

export default TodoContainer;