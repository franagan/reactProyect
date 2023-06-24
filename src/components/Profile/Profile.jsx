const Profile = ({ user }) => {
    console.log(user);

    return (
        <>
            <h3>Hola {user.name} estos son tus datos</h3>
            <p>Email :{user.email}</p>
            <p>Name :{user.name}</p>
            <p>Edad :{user.age}</p>
            <p>Direccion :{user.direction}</p>
            <p>Telefono :{user.phone}</p>
        </>
    );
};

export default Profile;
