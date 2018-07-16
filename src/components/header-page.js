import React from 'react';
import {Link} from 'react-router-dom';

export class HeaderBar extends React.Component {

    render() {
        return (
            <div className="header-bar">
                <h1>Full Stack Web Developer Vash</h1>
                <Link className="about" to="/about">About Me</Link><br></br>
                <Link className="contact" to="/contact">Contact Me!</Link><br></br>
                <Link className="portfolio" to="/">Portfolio</Link>
            </div>
        );
    }
}
