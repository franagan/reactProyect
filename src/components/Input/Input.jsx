import React, { useContext } from 'react';
import { userContext } from '../Context/userContext';

const Input = () => {
    const { setName } = useContext(userContext);
    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} />
        </div>
    );
};

export default Input;
