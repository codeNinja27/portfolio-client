import React from 'react';
import './footer-page.css';

export class FooterBar extends React.Component {

    render() {
        return (
            <div className="footer-bar">
                <a href="https://github.com/codeNinja27" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/tharakawije/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:tharakawijekularatne@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        );
    }
}

