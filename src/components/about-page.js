import React from 'react';
import {Link} from 'react-router-dom';
import './about-page.css';

export function aboutPage(props) {
    return (
        <div className="aboutContainer">
            <div className="aboutDesc">
                <h1>Hi My name is Tharaka aka Vash</h1>
                <h2>I love to code!</h2>
            </div>
        </div>
    );
}

export default aboutPage