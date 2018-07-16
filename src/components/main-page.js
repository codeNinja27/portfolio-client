import React from 'react';
import {Link} from 'react-router-dom';

export function mainPage(props) {
    return (
        <div className="mainPage">
            <div className="project1">
                <h1>This is the First project</h1>
            </div>
            <div className="project2">
                <h1>This is the Second project</h1>
            </div>
            <div className="project3">
                <h1>This is the Third project</h1>
            </div>
            {/* <Link className="about" to="/about">About Me</Link><br></br>
            <Link className="contact" to="/contact">Contact Me!</Link> */}
        </div>
    );
}

export default mainPage