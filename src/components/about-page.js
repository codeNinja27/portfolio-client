import React from 'react';
import './about-page.css';

export function aboutPage(props) {
    return (
        <div className="aboutContainer">
            <div className='profilePic'></div>
            <div className="aboutDesc">
                <div className="intro bg-light">
                  <h2>INTRO</h2>
                  <p>Hello, my name is Tharaka. I hold a Bachelor’s degree in Computer Science from UNLV, and I am passionate about leveraging my skills and knowledge in real-world applications. Coding is more than just a profession for me; it’s a passion that fuels my enthusiasm for tackling complex problems and developing innovative solutions. I am committed to continuous learning and self-improvement, constantly striving to enhance my abilities and knowledge. My goal is to look back on my journey with a sense of pride in my accomplishments and the progress I’ve made.</p>
                  <p>Beyond coding, I enjoy a variety of activities. I love playing basketball, exploring new places, hiking, engaging in board games, and discovering exciting new food spots around town. These interests help me maintain a well-rounded lifestyle and inspire my creativity and problem-solving skills.</p>
                  <p>I am eager to find opportunities where I can contribute meaningfully and grow both personally and professionally.</p>
                </div>
                
                <div className="skillContainer bg-light">
                  <h2>SKILLS</h2>
                  <div>
                    <h4>Front End</h4>
                    <p className="skills">C++ | Python | Javascript | jQuery | React | HTML | CSS</p>
                  </div>
                  <div>
                    <h4>Back End</h4>
                    <p className="skills">MongoDB | SQL | node.JS </p>
                  </div>
                    <h4>Deployment and Testing</h4>
                  <div>
                    <p className="skills">Mocha & Chai | Travis CI | Postman | Git |  GitHub</p>
                  </div>
                </div>
                <a href="../textfiles/resume.pdf" className="downloadResumeButton" download>Download Resume</a>
            </div>
        </div>
    );
}

export default aboutPage