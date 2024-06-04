import React from 'react'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <li><a className='nav-link' href="#">Inicio</a></li>
        <li><a className='nav-link' href="#">Ropa Mujer</a></li>
        <li><a className='nav-link' href="#">Ropa Hombre</a></li>
        <li><a className='nav-link' href="#">Electrónica</a></li>
        <li><a className='nav-link' href="#">Joyas</a></li>
      </ul>
    </nav>
  )
}
