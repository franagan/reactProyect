import React from 'react';
import { Link } from 'react-router-dom';
// import Cinemas from '../Cinemas/Cinemas';

const Home = () => {
    return (
        <div>
            <h1>Bienvenido a apiMovies</h1>
            <ul className="homeImages">
                <li>
                    <p>Movies</p>
                    <Link to={'/movies'}>
                        <img
                            src={require('../../../images/movieImages.jpg')}
                            alt="movies"
                        />
                    </Link>
                </li>
                <li>
                    <p>Cinemas</p>
                    <Link to={'/cinemas'}>
                        <img
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
