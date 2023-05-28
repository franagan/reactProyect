const Profile = ({ user }) => {
    return (
        <>
            <h1>User Profile</h1>
            <p>Email:{user.email}</p>
            <p>Name:{user.name}</p>
            <p>Edad:{user.edad}</p>
            <p>Direccion:{user.direccion}</p>
            <p>Telefono{user.telefono}</p>
        </>
    );
};

export default Profile;
