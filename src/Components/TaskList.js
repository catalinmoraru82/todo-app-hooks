import React from 'react';
import './task.css';

const TaskList = ( {tasks, deleteTodo} ) => {

    const TodoList = tasks.length ? 
        <ul className='collection'>
        {tasks.map( (task) => {
            return (<li task={task.id} key={task.id} className='collection-item blue-text text-darken-1 task'>
                <div>{task.value}</div>
                <i className="tiny material-icons close-task" onClick={() => deleteTodo(task.id)}>clear</i>
            </li>
            )
        })}
    </ul>
    : <span className='grey-text text-darken-1'>You have no tasks for today</span>

    return (
        <div>
            {TodoList}
        </div>
    )
}

export default TaskList;