import React from 'react';
// import {Link} from 'react-router-dom';
import './about-page.css';

export function aboutPage(props) {
    return (
        <div className="aboutContainer">
            <div className="aboutDesc">
                <div className="intro bg-light">
                  <h2>INTRO</h2>
                  <p>Hi, my name is Tharaka. I'm a recent Computer Science graduate, eager to find opportunities to put my skills to use. I am passionate about coding and enjoy the challenge of solving complex problems. I am committed to continuous learning and improvement, and I aspire to look back and be proud of the progress I have made. .</p>
                  <p>When I'm not coding, I love to play basketball, explore new places, hike, play board games, and enjoy boba.</p>
                </div>
                
                <div className="skillContainer bg-light">
                  <h2>SKILLS</h2>
                  <div>
                    <h4>Front End</h4>
                    <p className="skills">C++ | Python | Javascript | jQuery | React | HTML | CSS</p>
                  </div>
                  <div>
                    <h4>Back End</h4>
                    <p className="skills">MongoDB | PostgreSQL | node.JS </p>
                  </div>
                    <h4>Deployment and Testing</h4>
                  <div>
                    <p className="skills">Mocha & Chai | Travis CI | Postman | Git |  GitHub</p>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default aboutPage