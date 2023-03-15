import { useRef, useState } from "react"

const NoControlado = () => {

  const form = useRef(null)
  const [error, setError] = useState("")
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('Me diste click')
    
    console.log('form',form.current)
    console.log(new FormData(form.current))
    const data = new FormData(form.current)
    console.log(...data.entries())
    const {title, description, state}= Object.fromEntries([...data.entries()])
    console.log("dataObject",title,description,state)
    if(!title.trim() || !description.trim() || !state.trim()){
      return setError("Llenar los campos")
    }
    

  }

  return (
    <form onSubmit={handleSubmit} ref={form}>
        <input
          type="text" 
          placeholder="Ingrese todo" 
          className="form-control mb-2"
          name="title"
          defaultValue="todo #01"
        />
        
        <textarea 
          className="form-control mb-2" 
          placeholder="Ingrese la inscripcion"
          name="description"
          defaultValue="todo #01"
        />
        
        <select className="form-select mb-2" name="state">
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <button className="btn btn-primary" type="submit">Procesar</button>
        {
          error!== "" && error 
        }

    </form>
  )
}
export default NoControlado
