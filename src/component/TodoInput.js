import { useState } from 'react';
import './TodoInput.css';

function TodoInputList(props){
    const [inputValue, setInputValue] = useState("");
    const submitTodo = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            props.addTodo(inputValue);
            setInputValue("");
        }
    }
    return(
        <form onSubmit={submitTodo}>
            <input type='text' className='inputTodo' name="Todo" onChange={(e) => setInputValue(e.target.value)} placeholder='Type your task here...'/>

            <button type='submit'>+ Add</button>
        </form>
    );
};

export default TodoInputList;