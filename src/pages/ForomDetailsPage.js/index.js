import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddComments from "../../components/AddComments";
import Comments from "../../components/Comments/Comments";
import './index.css'

const API_URL = "http://localhost:5005";    


function ForomDetailsPage (props) {
  const [forom, setForom] = useState(null);
  const { foromId } = useParams();    

  const getForom = () => {          
    axios
      .get(`${API_URL}/api/forom/${foromId}`)
      .then((response) => {
        const oneForom = response.data;
        console.log(response.data)
        setForom(oneForom);
      })
      .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {                  
    getForom();
  }, [] );
  
  return (
    <div className="">

      {forom && (
        <>
          <h1 className="Title-forom-details">{forom.title}</h1>
         <div className="description-to-comments"><p className="description-forom-details">{forom.description}</p></div>
         </> 
      )}

      { forom && forom.comments.map((comment) => (
        <Comments key={comment._id} {...comment} /> 
      ))} 

    <AddComments refreshForom={getForom} foromId={foromId} />   

    
    
      
{/**  <Link to="/forom">
        <button>Back to forom</button>
      </Link>

      <Link to={`/forom/edit/${foromId}`}>
        <button>Edit </button>
      </Link>  */}
     
    </div>
  );
}

export default ForomDetailsPage;
