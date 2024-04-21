import { useLoaderData } from "react-router-dom";
import User from "../../User/User";
import './users.css'


const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Users: {users.length}</h2>
            <p>Our pantastic users</p>
            <div className="users">
                {
                    users.map((user, i) => <User key={i} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;