import React from 'react';


const TodoItem = ({label}) => {
    return <label style={{display: 'flex'}}>
        <input type={'checkbox'}/>
        <p>{label}</p>
    </label>
}

export default TodoItem