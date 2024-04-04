import React, {useEffect, useState} from 'react';
import TodoItem from './components/TodoItem';
import {createTodo, useGetTodos} from "./hooks/fetch";

const App = () => {

    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        (async () => {
            setTodos(await useGetTodos())
        })()
    }, []);

    return (
        <>
            <h1>My Todos</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                void createTodo(inputValue)
            }}>
                <input type={'text'} placeholder={'Add Todo...'} value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}/>
                <button type={'submit'}>Create a To Do</button>
            </form>
            <ul>
                {todos
                    .map((todo, index) => {
                        return <TodoItem key={todo.id} label={todo.label}/>
                    })}
            </ul>
        </>
    )
}

export default App;