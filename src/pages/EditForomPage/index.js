import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; 

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;

function EditForomPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { foromId } = useParams();  
  const navigate = useNavigate(); 

  useEffect(() => {                                  
    axios
      .get(`${API_URL}/forom/${foromId}`)
      .then((response) => {
        const oneForom = response.data;
        setTitle(oneForom.title);
        setDescription(oneForom.description);
      })
      .catch((error) => console.log(error));
    
  }, [foromId]);

  const handleFormSubmit = (e) => {                  
    e.preventDefault();
    const requestBody = { title, description };
 
    axios
      .put(`${API_URL}/forom/${foromId}`, requestBody)
      .then((response) => {
        navigate(`/forom/${foromId}`)
      });
  };

  const deleteProject = () => {             
    axios
      .delete(`${API_URL}/forom/${foromId}`)
      .then(() => {
        navigate("/forom");
      })
      .catch((err) => console.log(err));
  };  
  
  return (
    <div className="">
      <h3>Edit the Forom</h3>

      <form onSubmit={handleFormSubmit}>   
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject} className="btn">Delete Project</button>
    </div>
  );
}

export default EditForomPage;
