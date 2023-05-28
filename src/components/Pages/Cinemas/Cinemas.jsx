import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../../Input/Input';
import { Link } from 'react-router-dom';
import Movies from '../Movies/Movies';
// import { userContext } from '../../Context/userContext';

const Cinemas = () => {
    const [characters, setCharacters] = useState([]);
    // const { name, setname } = useContext(userContext);
    const getDataCinemas = async () => {
        const response = await axios.get(
            'https://proyect-movies-eight.vercel.app/cinema/cinemas'
        );
        setCharacters(response.data);
        console.log(response.data);
    };

    const renderList = () => {
        return characters.map((character) => {
            return (
                <li className="liMovies" key={character._id}>
                    <h3> {character.name}</h3>
                    <p>{character.location}</p>
                    <p>{character.movies}</p>
                    <Link to={'/cinemas/' + character._id}>
                        <img
                            classname="imgMovie"
                            src={character.image}
                            alt={character.name}
                        />
                    </Link>
                </li>
            );
        });
    };

    useEffect(() => {
        getDataCinemas();
    }, []);

    return (
        <>
            <h2>Cinemas</h2>
            <Input />
            <ul className="listMovies">{renderList()}</ul>
        </>
    );
};

export default Cinemas;
