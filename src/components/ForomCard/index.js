import { Link } from "react-router-dom";
import './index.css'

function ForomCard ( { title, description, _id } ) {
  
  return (
    <div className="ForomCard">
      <Link to={`/forom/${_id}`}>
        <h3 className="form-title">{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }} className="form-description">{description} </p>
    </div>
  );
}

export default ForomCard;
