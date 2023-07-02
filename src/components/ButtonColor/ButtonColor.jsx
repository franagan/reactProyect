import { useContext, useState } from 'react';
import { userContext } from '../Context/userContext';

const [theme, setTheme] = userContext(false);

const handleClick = (ev) => {
    setTheme(ev.target.checked);
};

const ButtonColor = () => {
    return (
        <form>
            <input type="checbox" name="theme" onClick={handleClick} />
        </form>
    );
};

export default ButtonColor;
