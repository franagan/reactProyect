import React, { useContext } from 'react';
import MiContexto from '../Shared/Mycontext';

const Input = () => {
    const { setName } = useContext(MiContexto);
    return (
        <div>
            <input type="search" onChange={(e) => setName(e.target.value)} />
        </div>
    );
};

export default Input;
