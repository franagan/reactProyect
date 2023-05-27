import React from 'react';
import { useForm } from 'react-hook-form';
// import { Axios } from 'axios';
// import { useEffect } from 'react';

const RegisterUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const result = (data) => {
        console.log(data);
        // const postNewUser = async () => {
        //     const response = await Axios.get(
        //         'https://proyect-movies-eight.vercel.app/user/register'
        //     );
        //     // setCharacters(response.data);
        // };
        // useEffect(() => {
        //     postNewUser();
        // }, []);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(result)} className="formRegister">
                <input
                    type="text"
                    placeholder="name"
                    {...register('name', {
                        required: 'el name no puede estar vacio',
                    })}
                />
                {errors.name && <p>{errors.name.message} </p>}
                <input
                    type="email"
                    placeholder="email"
                    {...register('email', {
                        required: 'el email no puede estar vacio',
                    })}
                />
                {errors.email && <p>{errors.email.message} </p>}
                <input
                    type="password"
                    placeholder="password"
                    {...register('password', {
                        required: 'el password no puede estar vacio',
                    })}
                />
                {errors.password && <p>{errors.password.message} </p>}
                <input
                    type="text"
                    placeholder="lastname"
                    {...register('lastname', {
                        required: 'el apellido no puede estar vacio',
                    })}
                />
                {errors.lastname && <p>{errors.lastname.message} </p>}
                <input
                    type="text"
                    placeholder="age"
                    {...register('age', {
                        required: 'la edad no puede estar vacio',
                    })}
                />
                {errors.age && <p>{errors.age.message} </p>}
                <input
                    type="text"
                    placeholder="phone"
                    {...register('phone', {
                        required: 'el telefono no puede estar vacio',
                    })}
                />
                {errors.telefono && <p>{errors.telefono.message} </p>}
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default RegisterUser;
