import React from 'react';

const Contact = () => {
    return (
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" />
            <br />
            <label htmlFor="">Email</label>
            <input type="text" />
            <br />
            <label htmlFor="">Comentario</label>
            <textarea></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default Contact;
