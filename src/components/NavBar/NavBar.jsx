import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/category/zapatillas">Zapatillas</Link>
            <Link to="/category/camisetas">Camisetas</Link>
            <Link to="/category/buzos">Buzos</Link>
            <Link to="/cart" id="carrito"><CartWidget />7</Link>
        </nav>
    );
};

export default NavBar;
