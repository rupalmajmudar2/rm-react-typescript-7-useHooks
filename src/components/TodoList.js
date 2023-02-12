import React, { useState, useEffect } from 'react';
import AddNewTodo from './AddNewTodo';

//functional component
const TodoList = () => {
    const [todos, setTodos] = useState([ //returns 2 values, 1 is the array, 2nd is the function to change the state
        { text: 'Pay bills', id: 1 },
        { text: 'Do your homework', id: 2 },
        { text: 'Feed the dog', id: 3 }
    ]); //hook to allow state in this functional component
    
    const [count, setCount] = useState(0); //just to see the useEffect works here:
        //that change of count re-renders the component and hence calls useEffect

    const addTodo = (text) => {
        setTodos([
            ...todos, 
            { text: text, id: Math.random() }
        ]);
    }

    /*const addTodo = () => {
        setTodos([
            ...todos, 
            { text: 'Learn hooks', id: Math.random() }
        ]);
    }*/

    //for lifecycle events in functional components. Callback fn runs each time the
    //component renders [i.e. when data changes]
    //So could use this to talk to db, api etc.
    /*useEffect (() => {
        console.log('UseEffect: ', todos)
    })*/ //this will fire for all data changes. To do so only for todo-changes:

    useEffect (() => {
        console.log('UseEffect ToDos: ', todos)
    }, [todos]); //run only when todos data changes

    useEffect (() => {
        console.log('UseEffect Count: ', count)
    }, [count]); //run only when todos data changes

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <AddNewTodo addTodo={addTodo}></AddNewTodo>
            <button onClick={()=>setCount(count+1)}>Score: {count} </button>
        </div>
    )
}
    
export default TodoList;