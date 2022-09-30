import React from 'react'
import './Post.css'

const Post = () => {
  return (
    <div className="post">
          <div className="post-container">
            <div className="post-img"> <img src=""></img></div>
            <div className="post-content">
              <h1 className="post-title">Titulo del post</h1>
              <p className="post-extract">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="post-react">
              <div className="post-commets"><i class="fa fa-comments" aria-hidden="true"></i> 2</div>
              <div className="post-likes"><i class="fa fa-heart" aria-hidden="true"></i> 30</div>
              </div>
            </div>
          </div>
         
        </div>
  )
}

export default Post