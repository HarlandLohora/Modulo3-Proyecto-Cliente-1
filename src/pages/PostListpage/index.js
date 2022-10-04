import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddPost from "../../components/AddPost";

const API_URL = "http://localhost:5005";


function PostListPage() {
  const [post, setPost] = useState([]);

  const getAllPost = () => {
    axios
      .get(`${API_URL}/api/post`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllPost();
  }, [] );

  
  return (
    <div className="">
       <AddPost refreshPost={getAllPost} />
       <h4>List of Post</h4>
        {post.map((post) => {
          return (
            <div className="" key={post._id} >
              <Link to={`/post/${post._id}`}>
                <h3>{post.name}</h3>
                <p>{post.description}</p>
                <img src={post.imageUrl}></img>
              </Link>
            </div>
          );
        })}     
       
    </div>
  );
}

export default PostListPage;
