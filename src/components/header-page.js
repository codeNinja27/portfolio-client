import React from 'react';
import {Link} from 'react-router-dom';
import './header-page.css';

export class HeaderBar extends React.Component {

    render() {
        return (
            <div className="header-bar">
                <div className="titleDiv">
                  <h1 className="myName">Tharaka Wijekularatne</h1>
                  <h2>Full Stack Web Developer</h2>
                </div>

                <div className="navBar">
                  <Link className="contact" to="/contact">Contact Me</Link>
                  <Link className="about" to="/about">About Me</Link>
                  <Link className="portfolio" to="/">Portfolio</Link>
                </div>

            </div>
        );
    }
}