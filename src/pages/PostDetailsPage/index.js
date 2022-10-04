import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
 
const API_URL = "http://localhost:5005";       


function PostDetailsPage (props) {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const getPost = () => {         
    axios
      .get(`${API_URL}/api/post/${postId}`)
      .then((response) => {
        const onePost = response.data;
        setPost(onePost);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {               
    getPost();
  }, [] );
 
  
  return (
    <div className="">
      {post && (
        <>
          <h1>{post.name}</h1>
          <p>{post.description}</p>
          
        </>
      )}

      <Link to="/post">
        <button>Back to projects</button>
      </Link>
 <br/>
      <Link to={`/post/edit/${postId}`}>
        <button>Edit Project</button>
      </Link>      
    </div>
  );
}

export default PostDetailsPage
