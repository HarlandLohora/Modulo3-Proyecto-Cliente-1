import React from 'react'
import Post from "../../components/Post/Post.jsx";
import Comments from '../../components/Comments/Comments.js';

const SinglePost = () => {
  return (
    <div className='container'>
        <Post /> 
        <Comments />
    </div>
  )
}

export default SinglePost