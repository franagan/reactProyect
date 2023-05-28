import React from 'react';
import { Link } from 'react-router-dom';
// import Cinemas from '../Cinemas/Cinemas';

const Home = () => {
    return (
        <div>
            <h2>Bienvenido a apiMovies</h2>
            <p>
                Tu pagina de movies y cinemas, elige el banner de peliculas o
                cines para ver las opciones
            </p>
            <ul className="homeImages">
                <li>
                    <p>Movies</p>
                    <Link to={'/movies'}>
                        <img
                            className="imgHome"
                            src={require('../../../images/movieImages.jpg')}
                            alt="movies"
                        />
                    </Link>
                </li>
                <li>
                    <p>Cinemas</p>
                    <Link to={'/cinemas'}>
                        <img
                            className="imgHome"
                            src={require('../../../images/cinemas.jpg')}
                            alt="cinemas"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
