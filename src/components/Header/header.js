import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div class="cover">
    <div className="container__cover">
        <div className="container__info">
            <h1>CREATE YOUR</h1>
            <h2>POST</h2>
            <p>IF YOU ARE A PROGRAMMER AND WANT TO PUBLISH YOUR ACHIEVEMENTS OR ASK YOUR QUESTIONS, YOU HAVE COME TO THE RIGHT PLACE</p>
            <a href="/auth/signup">Get Start</a>
        </div>
        <div class="container__vector">
        <img src="./images/header.png"></img>
        </div>
    </div>
    </div>   
  )
}

export default Header