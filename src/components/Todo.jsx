const Todo = ({todo, deleteTodo}) => { 
    const {title, descripcion, estate, priority, id} = todo
    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${estate && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${estate && 'text-decoration-line-through'}`}>{descripcion}</p>
                    <div className="d-flex gap-2">
                        <button 
                            className="btn btn-sm btn-danger"
                            onClick={()=>deleteTodo(id)}>Eliminar</button>
                        <button className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge bg-primary">{priority && 'Prioritario'}</span>
            </div>
        </li>
    )
 }
export default Todo