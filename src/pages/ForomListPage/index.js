import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddForom from "../../components/AddForom";
import ForomCard from "../../components/ForomCard";

const API_URL = "http://localhost:5005";


function ForomListPage() {
  const [forom, setForom] = useState([]);

  const getAllForom = () => {
    axios
      .get(`${API_URL}/api/forom`)
      .then((response) => setForom(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllForom();
  }, [] );

  
  return (
    <div className="">
      
      <AddForom refreshForom={getAllForom} />

      { forom.map((forom) => (
        <ForomCard key={forom._id} {...forom} />
      ))}     
       
    </div>
  );
}

export default ForomListPage;
