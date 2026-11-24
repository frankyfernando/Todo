import "./TodoList.css";
function TodoList(props){
    return(
        <div className="AddTodoList">
            {props.todos.length !== 0 ? (
                <ul>
                    {props.todos.map((todo, index) => {
                        return(
                            <li key={index}>
                                <input type="checkbox" className="checkbox"/>
                                <p className="toDo">{todo}</p>
                                <div className="buttonTodo">
                                    <button className="edit">Edit</button>
                                    <button className="remove" onClick={() => props.removeTodos(index)}>Hapus</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            ) : null}
        </div>
    )
};

export default TodoList;
