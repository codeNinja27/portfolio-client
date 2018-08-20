import React from 'react';
import './footer-page.css';
import gitHubLogo from '../images/github.png';
import linkedInLogo from '../images/linkedIn.png';
import gmailLogo from '../images/gmailLogo.png';

export class FooterBar extends React.Component {

    render() {
        return (
            <div className="footer-bar">
                <div className="gitHubDiv">
                  <a href="https://github.com/codeNinja27" target="_blank" rel="noopener noreferrer"><img src={ gitHubLogo } alt="gitHub logo" /></a>
                </div>
                <div className="linkedInDiv">
                  <a href="https://www.linkedin.com/in/tharakawije/" target="_blank" rel="noopener noreferrer"><img src={ linkedInLogo } alt="linkedIn logo" /></a>
                </div>
                <div className="emailDiv">
                  <a href="mailto:tharakawijekularatne@gmail.com" target="_blank" rel="noopener noreferrer"><img src={ gmailLogo } alt="gmail logo" /></a>
                </div>
            </div>
        );
    }
}

