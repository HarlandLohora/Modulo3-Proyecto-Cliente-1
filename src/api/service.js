import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:5005/api"
  
});

const errorHandler = (err) => {
  throw err;
};

const getPost = () => {
  return api.get("/post")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api.post("/upload", file)
    .then(res => res.data)
    .catch(errorHandler);
};

const createPost = (newPost) => {
  return api.post("/post", newPost)
    .then(res => res.data)
    .catch(errorHandler);
};

export default {
    getPost,
    uploadImage,
    createPost
};
