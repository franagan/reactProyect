import { Link } from 'react-router-dom';
import NavAdmin from './NavAdmin';
import NavUser from './NavUser';

const NavBar = ({ user, logoutUser }) => {
    return (
        <nav>
            <ul className="menu">
                <li className="linkMenu">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {' '}
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    {' '}
                    <Link to="/cinemas">Cinemas</Link>
                </li>
                <li>
                    {' '}
                    <Link to="/register">Register</Link>
                </li>
                {user ? (
                    user.role === 'admin' ? (
                        <NavAdmin />
                    ) : (
                        <NavUser />
                    )
                ) : null}

                <li>
                    {' '}
                    {user ? (
                        <button onClick={logoutUser}>Logout</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
