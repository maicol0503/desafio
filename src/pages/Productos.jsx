import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'



const Productos = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://6666123ad122c2868e49003b.mockapi.io/Productos')
      .then(res => res.json())
      .then(res => {
        setData(res)
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <Navbar />
      <h1 className='text-center'>Página de Productos</h1>
      {
        loading ? <h1>Cargando...</h1> : (
          data?.map(producto => (
            <div key={producto.id}>
              <h3>{producto.name}</h3>
              <p>{producto.descripcion}</p>
              <p>{producto.precio}</p>
            </div>
          ))
        )
      }
      <Link to="/">Volver a Home</Link>
    </main>
  )
}

export default Productos