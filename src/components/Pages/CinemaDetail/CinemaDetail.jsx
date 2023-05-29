import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CinemaDetail = () => {
    const { id } = useParams();
    console.log(id);
    const [character, setCharacter] = useState([]);
    // const [listMovies, setListMovies] = useState([]);
    const getDataCharacter = async () => {
        const res = await axios.get(
            'https://proyect-movies-eight.vercel.app/cinema/cinemas/'
        );
        console.log(res.data);
        const character = res.data.find(({ _id }) => _id === id);
        console.log(character);
        // const movieCharacter = character.movies.map(listMovies);
        // console.log(movieCharacter);
        setCharacter(character);
        // setListMovies(listMovies);
    };

    useEffect(() => {
        getDataCharacter();
    }, []);

    return (
        <div>
            <h2>Cinema Detail</h2>
            <div>
                <h4>{character.name}</h4>
                <img src={character.image} alt={character.title} />
                <p>{character.location}</p>
                {/* <p>{listMovies}</p> */}
            </div>
        </div>
    );
};

export default CinemaDetail;
