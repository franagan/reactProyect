import { useForm } from 'react-hook-form';
import { Axios } from 'axios';

const RegisterUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const result = async (data) => {
        console.log(data);
        const res = await new Axios(
            'https://proyect-movies-eight.vercel.app/user/register'
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit(result)} className="formRegister">
                <label>Name :</label>
                <input
                    type="text"
                    placeholder="name"
                    {...register('name', {
                        required: 'el name no puede estar vacio',
                    })}
                />
                {errors.name && <p>{errors.name.message} </p>}
                <label>Email :</label>
                <input
                    type="email"
                    placeholder="email"
                    {...register('email', {
                        required: 'el email no puede estar vacio',
                    })}
                />
                {errors.email && <p>{errors.email.message} </p>}
                <label>Password :</label>
                <input
                    type="password"
                    placeholder="password"
                    {...register('password', {
                        required: 'el password no puede estar vacio',
                    })}
                />
                {errors.password && <p>{errors.password.message} </p>}
                <label>Lastname:</label>
                <input
                    type="text"
                    placeholder="lastname"
                    {...register('lastname', {
                        required: 'el apellido no puede estar vacio',
                    })}
                />
                {errors.lastname && <p>{errors.lastname.message} </p>}
                <label>Age :</label>
                <input
                    type="text"
                    placeholder="age"
                    {...register('age', {
                        required: 'la edad no puede estar vacio',
                    })}
                />
                <br />
                {errors.age && <p>{errors.age.message} </p>}
                <label>Phone:</label>
                <input
                    type="text"
                    placeholder="phone"
                    {...register('phone', {
                        required: 'el telefono no puede estar vacio',
                    })}
                />
                {errors.telefono && <p>{errors.telefono.message} </p>}
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default RegisterUser;
