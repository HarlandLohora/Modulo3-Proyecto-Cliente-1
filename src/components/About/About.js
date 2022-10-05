import React from 'react'
import './About.css'

const About = () => {
  return (
    <section class="about">
            <div class="content-about">
                <img src="./images/about.png" alt="" class="imagen-about-us"></img>
                <div class="content-text">
                    <h3><span>1</span>Chat with other programmers</h3>
                    <p>Ask all your questions and solve your doubts through our forums</p>
                    <h3><span>2</span>Create posts with your achievements</h3>
                    <p>Become a recognized programmer by uploading your projects with your publications</p>
                        <h3><span>3</span>From junior to senior</h3>
                    <p>Watch, read and learn</p>
                </div>
            </div>
    </section>
  )
}

export default About