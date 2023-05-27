import React from 'react';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
    return (
        <ul>
            <li>
                <Link to={'/register'}>Registro Usuario</Link>
            </li>
            <li>
                <Link to={'/registerMovie'}>Registro pelicula</Link>
            </li>
            <li>
                <Link to="/delete">Eliminar usuario</Link>
            </li>
            <li>
                {' '}
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    );
};

export default NavAdmin;
