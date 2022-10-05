import React from 'react'
import './index.css'

const Profile = (props) => {
  return (

    <div className='container'>
      <div className='user-profile'>
        <div className='user-img'>
          <img src={props.user.imageUrl}></img>
            <h5 className='user-name'>{props.user.username}</h5>
          <h5 className='user-occupation'>{props.user.ocupation}</h5>
          <h5 className='user-occupation'>{props.user.email}</h5>
        </div>
       
       
      </div>
      <div className='user-social-network'>
          <div className='user-facebook'><strong>Facebook</strong>: miFacebook</div>
          <div className='user-git'><strong>Github</strong>: miGit</div>
          <div className='user-youtube'><strong>YouTube</strong>: miYoutube</div>
        </div>
    </div>
  )
} 

export default Profile