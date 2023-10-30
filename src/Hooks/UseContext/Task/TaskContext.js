import React, {createContext, useContext, useReducer} from 'react';

const TasksContext = createContext(null);
const TaskDispatchContext = createContext(null);

export function TaskProvider({children}){
    const[tasks, dispatch] = useReducer(taskReducer, initialTasks);
    return(
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext value={dispatch}>
                {children}
            </TaskDispatchContext>
        </TasksContext.Provider>
    )
}

//custom Hook

export function useTasks(){
    return useContext(TasksContext);
}
export function useTasksDispatch(){
    return useContext(TaskDispatchContext);
}

//reducer

function taskReducer(tasks, action){
    switch(action.type){
        case 'added': {
            return[...tasks, {
                id: action.id,
                text: action.text,
                done:false,
            }]
        }

        case 'changed' : {
            return tasks.map((t)=>{
                if(t.id === action.task.id){
                    return action.task;
                }else{
                    return t;
                }
            })
        }

        case 'deleted':{
            return tasks.filter((t)=> t.id!==action.id);
        }
        default:{
            throw Error('Unknown action' + action.type)
        }
    } 
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];