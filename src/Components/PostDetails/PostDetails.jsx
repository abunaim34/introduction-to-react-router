import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const {id, title, body} = post;
    const navigate = useNavigate();
    const {postId} = useParams()
    console.log(postId)

    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h5>Post Details about: {id}</h5>
            <p>Title: {title}</p>
            <p> <small>{body}</small> </p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;