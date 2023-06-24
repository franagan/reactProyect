import { Link } from 'react-router-dom';

const NavUser = () => {
    return (
        <ul>
            <li>
                <Link to="/update">Modificar datos</Link>
            </li>
            <li>
                <Link to="/myMovies">Mis peliculas</Link>
            </li>
            <li>
                {' '}
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    );
};

export default NavUser;
