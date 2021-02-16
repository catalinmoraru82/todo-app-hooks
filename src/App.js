import React, { useState } from 'react';
import Todo from './Todo';
import TaskList from './TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const deleteTodo = (id) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(filteredTasks)
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <Todo tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} deleteTodo={deleteTodo} />
        </div>
    )
}

export default App;