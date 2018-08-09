import React from 'react';
import {Link} from 'react-router-dom';
import './main-page.css';
// import images from '../images/';

export function mainPage(props) {
    return (
        <div className="mainPage">
            <div className="project bg-light">
              <h2 className="projectTitle">Get Woke</h2>
              <div className="img img2">
              </div>
              <div className="projectDes">
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
              <a className="live btn btn-outline-primary" href="https://jolly-torvalds-3b5e5e.netlify.com/" target="_blank">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/tharaka-line-app-client" target="_blank">Project Repo</a>   
            </div>
            <div className="project bg-light">
                <h2 className="projectTitle" >Line App</h2>
                <div className="img img1">
                </div>
                <div className="projectDes">
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <a className="live btn btn-outline-primary" href="https://jolly-torvalds-3b5e5e.netlify.com/" target="_blank">Live App</a>
                <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/tharaka-line-app-client" target="_blank">Project Repo</a>
            </div>
            <div className="project bg-light">
              <h2 className="projectTitle">Commit2Win</h2>
              <div className="img img3">
              </div>
              <div className="projectDes">
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </div>
              <a className="live btn btn-outline-primary" href="https://commit2win.herokuapp.com/" target="_blank">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/ghub-tracker-client" target="_blank">Project Repo</a>
            </div>
        </div>
    );
}

export default mainPage