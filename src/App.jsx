import { useState, useEffect } from "react";
import Cat from "./components/Cat";
import Controlado from "./components/Controlado";
import Formulario from "./components/Formulario";
import NoControlado from "./components/NoControlado";
import Todos from "./components/Todos";

const InitialStateTodos = JSON.parse(localStorage.getItem('todos')) || []

const App = ()=>{
    const [todos, setTodos] = useState(InitialStateTodos)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = todo =>{
        setTodos([...todos, todo])
    }

    const deleteTodo = id =>{

        const newArray = todos.filter(todo => todo.id!==id)
        setTodos(newArray)
    }

    const updateTodo = id =>{
        const newArray = todos.map(todo=> {
            if(todo.id === id){
                todo.estate = !todo.estate
            }
            return todo
        })
        setTodos(newArray)
    }

    const orderTodo = arrayTodo =>{
        return arrayTodo.sort((a,b)=>{
            if(a.priority===b.priority) return 0
            if(a.priority===true) return -1
            if(!a.priority===false) return 1
        })
    } 

    return(
        <div className="container mb-2">
            <h1 className="my-5">Formularios</h1>
            <Formulario addTodo={addTodo}/>
            <hr/>
            <Todos todos={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    )
}
export default App;