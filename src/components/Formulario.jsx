import { useRef, useState } from "react"
import Swal from "sweetalert2"

const Formulario = ({addTodo}) => {
    const [todo, setTodo] = useState({
        title: 'titulo #01',
        descripcion: 'descricion #01',
        estate: 'pendiente', 
        priority: true
      })
    
      const {title, descripcion, estate, priority} = todo
      
      const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('Me diste click')
        if(!title.trim() || !descripcion.trim() || !estate.trim()){
            return  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Titulo y descripcion incompletos',
                    })
        }else{
            addTodo(
                {
                    id: Date.now(),
                    ...todo,
                    estate: estate ==='completado'
                }
            )
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Todo agregado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            setTodo({
                title:'',
                descripcion: '',
                estate: 'pendiente',
                priority: false
            })

        }
       
      }
      const handleChange = e =>{
        const {type, value, checked, name} =  e.target   
        console.log(value)
        setTodo({
          ...todo,
          [name] : type ==='checkbox' ? checked : value 
        })
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <input
              type="text" 
              placeholder="Ingrese todo" 
              className="form-control mb-2"
              name="title"
              value={title}
              onChange={handleChange}
              
            />
            
            <textarea 
              className="form-control mb-2" 
              placeholder="Ingrese la inscripcion"
              name="descripcion"
              value={descripcion}
              onChange={handleChange}
            />
    
            <div className="form-check mb-2">
              <input 
                type="checkbox"
                name="priority"
                className="form-check-input"
                id="inputCheck"
                checked={priority}
                onChange={handleChange} />
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>
            
            <select 
                className="form-select mb-2" 
                name="estate" 
                value={estate}
                onChange={handleChange}>
              <option value="pendiente">pendiente</option>
              <option value="completado">completado</option>
            </select>
            
            <button className="btn btn-primary" type="submit">Agregar Todos</button>
            
    
        </form>
      )
}

export default Formulario