import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
// import { userContext } from '../../Context/userContext';

const Movies = () => {
    const [characters, setCharacters] = useState([]);
    // const { name, setname } = useContext(userContext);
    const getDataMovie = async () => {
        const response = await axios.get(
            'https://proyect-movies-eight.vercel.app/movie/movies'
        );
        setCharacters(response.data);
        console.log(response.data);
    };

    const renderList = () => {
        return characters.map((character) => {
            return (
                <li className="liMovies" key={character._id}>
                    <h3> {character.title}</h3>
                    <Link to={'/movies/' + character._id}>
                        <img
                            classname="imgMovie"
                            src={character.image}
                            alt={character.title}
                        />
                    </Link>
                </li>
            );
        });
    };

    useEffect(() => {
        getDataMovie();
    }, []);

    return (
        <>
            <h2>Movies </h2>
            <Input />
            <ul className="listMovies">{renderList()}</ul>
        </>
    );
};

export default Movies;
