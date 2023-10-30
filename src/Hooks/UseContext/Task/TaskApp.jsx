import React from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';
import {TaskProvider} from './TaskContext'
const TaskApp =()=> {
  return (
    <>
    <TaskProvider>
        <h1>Day off in Kathmandu</h1>
        <AddTask />
        <TaskList/>
    </TaskProvider>
    </>
  )
}
export default TaskApp;