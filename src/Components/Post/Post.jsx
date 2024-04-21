import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const userStyle ={
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px',
    }

    const handleShowDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={userStyle}>
            <h4>Post of id: {id}</h4>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post Details</Link>
            <button onClick={() => handleShowDetails()}>Click to see details</button>
        </div>
    );
};

export default Post;