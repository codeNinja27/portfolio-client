import React from 'react';
import {Link} from 'react-router-dom';
import './main-page.css';
// import images from '../images/';

export function mainPage(props) {
    return (
        <div className="mainPage">
            <div className="project">
              <h1 className="projectTitle">Get Woke</h1>
              <div className="img2">
                  <a className="live" href="https://jolly-torvalds-3b5e5e.netlify.com/" target="_blank">Live App</a>
                  <a className="repo" href="https://github.com/thinkful-ei20/tharaka-line-app-client" target="_blank">Project Repo</a>
              </div>
            </div>
            <div className="project">
                <h1 className="projectTitle" >Line App</h1>
                <div className="img1">
                  <a className="live" href="https://jolly-torvalds-3b5e5e.netlify.com/" target="_blank">Live App</a>
                  <a className="repo" href="https://github.com/thinkful-ei20/tharaka-line-app-client" target="_blank">Project Repo</a>
                </div>
            </div>
            <div className="project">
              <h1 className="projectTitle">Commit2Win</h1>
              <div className="img3">
                <a className="live" href="https://commit2win.herokuapp.com/" target="_blank">Live App</a>
                <a className="repo" href="https://github.com/thinkful-ei20/ghub-tracker-client" target="_blank">Project Repo</a>
              </div>
            </div>
        </div>
    );
}

export default mainPage