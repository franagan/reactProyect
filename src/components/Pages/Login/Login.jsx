import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const initial_state = {
    email: '',
    password: '',
};

const Login = ({ loginUser, loginError, setLoginError }) => {
    const location = useLocation();
    const { state } = location;
    console.log(location);

    const [formData, setFormData] = useState(initial_state);

    const changeInput = (ev) => {
        const { value, name } = ev.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
        setLoginError('usuario o contraseña incorrecta');
    };

    const submitForm = (ev) => {
        ev.preventDefault();
        console.log('form send');
        loginUser(formData, state ? state.prevRoute : null);
        setFormData(initial_state);
        // setLoginError('usuario o contraseña incorrecta');
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={changeInput}
                    value={formData.email}
                />
            </label>
            <label htmlFor="pass">
                password
                <input
                    type="password"
                    name="password"
                    id="pass"
                    onChange={changeInput}
                    value={formData.password}
                />
            </label>
            <div>
                <button type="submit">Login</button>
            </div>

            {loginError ? (
                <div style={{ color: 'red' }}>{loginError}</div>
            ) : null}
        </form>
    );
};

export default Login;
