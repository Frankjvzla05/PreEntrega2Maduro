import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className='header'>
            <h1><Link to={"/"}>Frank's Shop</Link></h1>
            <NavBar />
            <Carrito />
        </header>
    )
}
