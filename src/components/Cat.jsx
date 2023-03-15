import { useState } from "react"


const Cat = () => {

    const [cat, setCat] = useState({name: 'Dexter', year:5})
    
    const handleClick =()=>{
        console.log('me diste click')
        //cualquiera de las dos opciones son factibles
        //setCat({...cat, year: cat.year +1})
        setCat((prev)=> ({...prev, year: cat.year+1}))
    }
  return (
    <>
        <h2> {cat.name} - {cat.year}</h2>
        <button 
            className="btn btn-dark mb-2"
            onClick={handleClick}> Update year
        </button>
    </>
  )
}

export default Cat