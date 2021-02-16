import React, {useState} from 'react';

const Todo = ({tasks, setTasks}) => {
    const [value, setValue] = useState('');
    const [counter, setCounter] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCounter(counter + 1);

        if (value.trim()) {
            setTasks([{
                id: counter,
                value
            }, ...tasks]);
        }
        
        setValue('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" value= {value} onChange={handleChange}/>
                    { tasks.length ? <label htmlFor="last_name">Nice, keep going</label> : <label htmlFor="last_name">Add a task</label>}
                </div>
            </form>
        </div>
        
    )
}

export default Todo;