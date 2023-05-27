const Profile = ({ user }) => {
    return (
        <>
            <h1>User Profile</h1>
            <p>Email:{user.email}</p>
            <p>Name:{user.name}</p>
        </>
    );
};

export default Profile;
