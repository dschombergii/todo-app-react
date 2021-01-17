import React from 'react'

function TodoCard(props) {

    const { title, removeTodo, index } = props
    return (
        <li style={{ color: "#61DAFB" }}>{title + " "}
            <button onClick={() => { removeTodo(index) }}>Done</button>
        </li>
    )
}

export default TodoCard