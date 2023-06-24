import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterMovie = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const result = async (data) => {
        console.log(data);
        const res = await axios.post(
            process.env.REACT_APP_BACK_URL + '/movie/'
        );
        console.log(res);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(result)} className="formRegister">
                <label>Title :</label>
                <input
                    type="text"
                    placeholder="title"
                    {...register('title', {
                        required: 'el title no puede estar vacio',
                    })}
                />
                {errors.title && <p>{errors.title.message} </p>}
                <label>director:</label>
                <input
                    type="text"
                    placeholder="director"
                    {...register('director', {
                        required: 'el director no puede estar vacio',
                    })}
                />
                {errors.director && <p>{errors.director.message} </p>}
                <label>year :</label>
                <input
                    type="text"
                    placeholder="year"
                    {...register('year', {
                        required: 'el year no puede estar vacio',
                    })}
                />
                {errors.year && <p>{errors.year.message} </p>}
                <label>genre:</label>
                <input
                    type="text"
                    placeholder="genre"
                    {...register('genre', {
                        required: 'el genre no puede estar vacio',
                    })}
                />
                {errors.genre && <p>{errors.genre.message} </p>}

                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default RegisterMovie;
