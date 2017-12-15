import React from 'react'

const TodoItem = ({name, completed, _id, onDelete, onToggle}) => (
    <li>
        <span
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(_id, completed)}
        >
            {name}
        </span>
        <span onClick={() => onDelete(_id)}> X </span>
    </li>
)

export default TodoItem;