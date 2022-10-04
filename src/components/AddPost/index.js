import { useState } from "react";
import axios from "axios";
import service from "../../api/service";
 
const API_URL = "http://localhost:5005";
 
function AddPost(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };


  const handleSubmit = (e) => {                        
    e.preventDefault();
 
    const requestBody = { name, description,imageUrl };
    axios
      .post(`${API_URL}/api/post`, requestBody)
      .then((response) => {
        setName("");
        setDescription("");
        setImageUrl("");
        props.refreshPost(); 
      })
      .catch((error) => console.log(error));
  };
 
 
  return (
    <div className="">
      <h3>Add Post</h3>
 
      <form onSubmit={handleSubmit}>  
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddPost;