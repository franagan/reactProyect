import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <nav>
            <ul className="menuFooter">
                <li>
                    <Link to="/Contact">Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;
