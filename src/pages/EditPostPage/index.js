import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditPostPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { postId } = useParams(); 
  const navigate = useNavigate();  

  
 useEffect(() => {                             
    axios
      .get(`${API_URL}/api/post/${postId}`)
      .then((response) => {
        const onePost = response.data;
        setName(onePost.name);
        setDescription(onePost.description);
      })
      .catch((error) => console.log(error));
    
  }, [postId]);  


  const handleFormSubmit = (e) => {                 
    e.preventDefault();
    const requestBody = { name, description };
 
    axios
      .put(`${API_URL}/api/post/${postId}`, requestBody)
      .then(() => {
        navigate(`/post/${postId}`)
      });
  };
  
  const deletePost = () => {                   
    axios
      .delete(`${API_URL}/api/post/${postId}`)
      .then(() => {
        navigate("/post");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div className="">
      <h3>Edit the Post</h3>

      <form onSubmit={handleFormSubmit}>     
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default EditPostPage;
