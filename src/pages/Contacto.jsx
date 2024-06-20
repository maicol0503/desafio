import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Contacto = () => {
  return (
    <main>
      <Navbar />
      <h1 className="text-center">Contactos</h1>
      <Link to="/">Volver a Home</Link>
    </main>
  )
}

export default Contacto