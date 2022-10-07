import { useState } from "react";
import axios from "axios";
import './index.css'

const API_URL = `${process.env.REACT_APP_SERVER_URL}`;


function AddComments(props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  
  const handleSubmit = (e) => {     
    e.preventDefault();
    const { foromId } = props;
    const requestBody = { name, comment, foromId };
 
    axios
      .post(`${API_URL}/comments`, requestBody)
      .then((response) => {
        setName("");
        setComment("");
        props.refreshForom();
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="comments">
      <h3 className="addcomments">Add Comments</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          className="form-comments"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Comment:</label>
        <textarea
        className="form-comments"
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
       <br></br>
        <button type="submit" className="btn">Send</button>
        <br></br>
      </form>
    </div>
  );
}

export default AddComments;
