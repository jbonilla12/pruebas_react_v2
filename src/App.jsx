import { useState } from "react";
import Cat from "./components/Cat";
import Controlado from "./components/Controlado";
import Formulario from "./components/Formulario";
import NoControlado from "./components/NoControlado";
import Todos from "./components/Todos";

const InitialStateTodos =[
    {
        id: 1,
        title: 'titulo #01',
        descripcion: 'descricion #01',
        estate: false, 
        priority: true,
        error:null
    },
    {
        id: 2,
        title: 'titulo #02',
        descripcion: 'descricion #02',
        estate: true, 
        priority: false,
        error:null
    },
    {
        id: 3,
        title: 'titulo #03',
        descripcion: 'descricion #03',
        estate: false, 
        priority: false,
        error:null
    }
]

const App = ()=>{
    const [todos, setTodos] = useState(InitialStateTodos)

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

    return(
        <div className="container mb-2">
            <h1 className="my-5">Formularios</h1>
            <Formulario addTodo={addTodo}/>
            <hr/>
            <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
    )
}
export default App;