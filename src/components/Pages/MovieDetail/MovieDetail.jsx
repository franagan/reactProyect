import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    const getDataCharacter = async () => {
        const res = await axios.get(
            'https://proyect-movies-eight.vercel.app/movie/movies/'
        );
        console.log(res.data);
        setCharacter(res.data);
    };

    useEffect(() => {
        getDataCharacter();
    }, []);

    return (
        <div>
            <h2>Movie Detail</h2>
            <div>
                <h4>{character.title}</h4>
                <img src={character.image} alt={character.title} />
                <p>{character.director}</p>
                <p>{character.year}</p>
                <p>{character.genre}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
