import React, {useState} from "react";
import AddTodo from "../../components/AddTodo";
import TaskList from "../../components/TaskList";

/**
 * In this example, the todos state variable holds an array.
 * Each button handler calls setTodos with the next version of that array.
 *  The [...todos] spread syntax,
 *  todos.map() and todos.filter() ensure the state array is replaced rather than mutated.
 */
const initialTodos= [
    {id:0, title:'Buy Milk', done: true},
    {id:1, title:'Eat tacos', done: false},
    {id:2, title:'Brew tea', done: false},
]
let nextId = 3;
const List = ()=>{
    const [todos, setTodos] = useState(initialTodos);
    const handleAddTodo = (title)=>{
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ])
    }

    const handleChangeTodo =(nextTodo)=>{
        setTodos(todos.map(t=>{
            if(t.id === nextTodo.id){
                return nextTodo;
            }else{
                return t;
            }
        }));
    }

    const handleDeleteTodo = (todoId)=>{
        setTodos(todos.filter(t=>t.id!==todoId));
    }
    return(
    <>
        <AddTodo onAddTodo = {handleAddTodo} />
        <TaskList todos= {todos} onChangeTodo={handleChangeTodo} onDeleteTodo={handleDeleteTodo} />
    </>
    );
}
export default List;