import React from 'react';
import {Link} from 'react-router-dom';
import './about-page.css';

export function aboutPage(props) {
    return (
        <div className="aboutContainer">
            <div className="aboutDesc">
                <div className="intro bg-light">
                  <h2>INTRO</h2>
                  <p>Hi, my name is Tharaka. I'm a Full-Stack-Developer based in Las Vegas. I'm passionate about coding and love to struggle my way to solutions.</p>
                  <p>When I'm not coding, I love to play basketball,  play games, drive around, read and go hiking.</p>
                </div>
                
                <div className="skillContainer bg-light">
                  <h2>WHAT I DO</h2>
                  <div>
                    <h4>Front End</h4>
                    <p className="skills">Javascript | ES6 | jQuery | React | Redux | HTML5 | CSS3</p>
                  </div>
                  <div>
                    <h4>Back End</h4>
                    <p className="skills">MongoDB | PostgreSQL | node.JS | Python | Express | RESTful API's</p>
                  </div>
                    <h4>Deployment and Testing</h4>
                  <div>
                    <p className="skills">Mocha & Chai | Travis CI | Postman | Heroku | Netlify | Git |  GitHub</p>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default aboutPage