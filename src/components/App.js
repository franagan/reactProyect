import imageHeader from '../images/header-pelis.jpg';
import '../styles/App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home/Home';
import Login from './Login/Login';
import Movies from './Pages/Movies/Movies';
import Cinemas from './Pages/Cinemas/Cinemas';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact/Contact';
import NotFound from './NotFound';
import AuthRoute from './AuthRoute/AuthRoute';
import { useState } from 'react';
import { API } from '../services/api';
import { userContext } from './Context/userContext';
import RegisterUser from './Pages/Register/RegisterUser';

function App() {
    const userValue = { name: '{user.email}' };
    const navigate = useNavigate();
    const ls = JSON.parse(localStorage.getItem('token'));
    const [user, setUser] = useState(ls);
    const [loginError, setLoginError] = useState('');
    const [theme, setTheme] = useState(false);
    const [name, setName] = useState('');
    const loginUser = (formData, prevRoute) => {
        API.post('/user/login', formData).then((res) => {
            console.log(res.data);
            setUser(res.data.userInfo);
            localStorage.setItem('token', JSON.stringify(res.data));
        });
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/');
    };

    const getMovies = () => {
        API.post('/movie/movies').then((res) => {
            console.log(res.data);
            setUser(res.data.userInfo);
            localStorage.setItem('token', JSON.stringify(res.data));
        });
    };

    return (
        <userContext.Provider
            value={{ userValue, name, setName, setLoginError }}
        >
            <div className={theme ? 'App' : 'light'}>
                <button onClick={() => setTheme(!theme)}>Color Change</button>

                <img
                    className="logoHeader"
                    src={imageHeader}
                    alt="logo-header"
                />
                <h1>Proyect React Movies</h1>
                <NavBar user={user} logoutUser={logoutUser} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/movies"
                        element={<Movies getMovies={getMovies} />}
                    />
                    <Route path="/cinemas" element={<Cinemas />} />
                    <Route path="/register" element={<RegisterUser />} />
                    <Route
                        path="/profile"
                        element={
                            <AuthRoute
                                user={user}
                                component={<Profile user={user} />}
                            />
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <Login
                                loginUser={loginUser}
                                loginError={loginError}
                            />
                        }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </userContext.Provider>
    );
}

export default App;
