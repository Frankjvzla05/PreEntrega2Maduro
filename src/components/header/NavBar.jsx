import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li>
          <Link className='nav-link' to={"/"}>Inicio</Link>
        </li>
        <li>
         <Link className='nav-link' to={"category/ropa-mujer"}>Ropa Mujer</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/ropa-hombre"}>Ropa Hombre</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/electronica"}>Electrónica</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/joyas"}>Joyas</Link>
        </li>
      </ul>
    </nav>
  )
}
