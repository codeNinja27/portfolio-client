import React from 'react';
import {Link} from 'react-router-dom';

export function aboutPage(props) {
    return (
        <div className="about">
            <div className="project1">
                <h1>This is the First project</h1>
            </div>
            <div className="project2">
                <h1>This is the Second project</h1>
            </div>
            <div className="project3">
                <h1>This is the Third project</h1>
            </div>
            <Link className="portfolio" to="/">Portfolio</Link>
        </div>
    );
}

export default aboutPage