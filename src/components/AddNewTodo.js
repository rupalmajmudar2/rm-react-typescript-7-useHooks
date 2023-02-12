import React, { useState } from "react";

const AddNewTodo = ( { addTodo }) => { //function passed in
    const [todos, setTodos ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todos);
        addTodo(todos);
        setTodos(''); //blank out the input field after submit
    } 

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor= 'todo'>To Do</label>
            <input type = 'text' value={todos} id='todo' onChange={(e) => setTodos(e.target.value)}/>
            <input type='submit' />
        </form>
    );
}

export default AddNewTodo;
