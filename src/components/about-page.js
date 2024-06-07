import React from 'react';
// import {Link} from 'react-router-dom';
import './about-page.css';

export function aboutPage(props) {
    return (
        <div className="aboutContainer">
            <div className='porfilePic'></div>
            <div className="aboutDesc">
                <div className="intro bg-light">
                  <h2>INTRO</h2>
                  <p>Hello, my name is Tharaka. I am a recent Computer Science graduate from UNLV, enthusiastic about finding opportunities to apply my skills and knowledge. Coding is my passion, and I thrive on the challenge of solving complex problems. I am dedicated to continuous learning and self-improvement, with the aspiration of looking back on my journey with pride in my accomplishments.</p>
                  <p>Outside of coding, I enjoy playing basketball, exploring new places, hiking, playing board games, and discovering new food spots around the town.</p>
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