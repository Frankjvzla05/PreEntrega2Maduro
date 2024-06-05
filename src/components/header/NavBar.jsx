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
         <Link className='nav-link' to={"category/women's clothing"}>Ropa Mujer</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/men's clothing"}>Ropa Hombre</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/electronics"}>Electrónica</Link>
        </li>
        <li>
          <Link className='nav-link' to={"category/jewelery"}>Joyas</Link>
        </li>
      </ul>
    </nav>
  )
}
