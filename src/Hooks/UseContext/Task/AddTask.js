import React, {useState, useContext} from 'react';
import { useTasksDispatch } from './TaskContext';

let nextId = 3;

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useTasksDispatch();
  return (
    <>
        <input placeholder='Add task'
        value={task}
        onChange={e=> setTask(e.target.value)}
         />
         <button onClick={()=>{
            setText(''),
            dispatch({
                type:'added',
                id:nextId++,
                text: text,
            })
         }}>Add</button>
    </>
  )
}

export default AddTask