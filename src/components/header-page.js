import React from 'react';
import {Link} from 'react-router-dom';
import './header-page.css';
import profileImage from '../images/tharakaLogo.png'; // Adjust the path to your image


export class HeaderBar extends React.Component {

    render() {
        return (
            <div className="header-bar">
                <img src={profileImage} alt="Profile" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
                <div className="titleDiv">
                    <h4 className="myName">Tharaka Wijekularatne</h4>
                    <small className="devTitle">Full Stack Software Engineer</small>
                </div>
                

                <div className="navBar">
                  {/* <Link className="contact" to="/contact">Contact Me</Link> */}
                  <Link className="about" to="/about">About Me</Link>
                  <Link className="portfolio" to="/">Portfolio</Link>
                </div>

            </div>
        );
    }
}
