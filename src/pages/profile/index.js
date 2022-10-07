import React from 'react'
import './index.css'
import {Avatar} from '@chakra-ui/react';

const Profile = (props) => {
  return (

    <div className='container'>
      <div className='user-profile'>
        <div className='user-img'>
        <Avatar
                    size={'lg'}
                    src={props.user.imageUrl}
                  />
                  <br></br><br></br>
            <h5 className='user-name'><i class="bi bi-person"></i> <strong>User: </strong>{props.user.username}</h5>
          <h5 className='user-occupation'><i class="bi bi-terminal"></i> <strong>Ocupation: </strong>{props.user.ocupation}</h5>
          <h5 className='user-occupation'><i class="bi bi-envelope"></i> <strong>Email: </strong>{props.user.email}</h5>
        </div>
       
       
      </div>
     
    </div>
  )
} 

export default Profile