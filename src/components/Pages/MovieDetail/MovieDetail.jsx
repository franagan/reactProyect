import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
    const { movie } = useParams();
    console.log(movie);
    const [getMovie, setGetMovie] = useState({});
    const getDataCharacter = async () => {
        const response = await axios.get(
            'https://proyect-movies-eight.vercel.app/movie/movies/' + movie
        );
        setGetMovie(response.data.i);
        console.log(response.data.i);
    };
    useEffect(() => {
        getDataCharacter();
    }, []);

    return (
        <div>
            <h2>Movie Detail</h2>
            <div>
                <h4>{getMovie.title}</h4>
                <p>{getMovie.image}</p>
            </div>
        </div>
    );
};

export default MovieDetail;
