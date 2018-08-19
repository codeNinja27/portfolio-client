import React from 'react';
// import {Link} from 'react-router-dom';
import './main-page.css';

export function mainPage(props) {
    return (
        <div className="mainPage">    

            <div className="project bg-light">
              <h2 className="projectTitle" >Line App</h2>
              <div className="img img1">
              </div>
              <div className="projectDes">
                Never waste time waiting in lines again. Line App will save your valuable time. You can either ask for someone else to wait in line for you or wait in line for someone else.
              </div>
              <div className="techStack">
                React | Redux | Javascript | Node | Express | Passport | JWT | HTML5 | CSS3 | mLab | Heroku   Netlify
              </div>
              <a className="live btn btn-outline-primary" href="https://jolly-torvalds-3b5e5e.netlify.com/" target="_blank" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/tharaka-line-app-client" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>  
  
            <div className="project bg-light">
              <h2 className="projectTitle">Commit2Win</h2>
              <div className="img img3">
              </div>
              <div className="projectDes">
                Commit2Win is a web app created with the goal of using competition to encourage better version control usage.
                By tracking Github contributions, it allows users to compete with each other on a day-to-day basis.
                Users are further encouraged to compete with a challenge system that allows a user to directly compare their contributions with another.
              </div>
              <div className="techStack">
                React | Redux | Javascript | Node | Express | Passport | JWT | HTML5 | CSS3 | mLab | Heroku   Netlify | Enzyme | Mocha | Chai | React-easy-chart
              </div>
              <a className="live btn btn-outline-primary" href="https://commit2win.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/ghub-tracker-client" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>

            <div className="project bg-light">
              <h2 className="projectTitle">Get Woke</h2>
              <div className="img img2">
              </div>
              <div className="projectDes">
                Revisit America's unsung heroes through a deck of cards. This is stuff you won't find in history books, the forgotten struggles and unifying strength brought to America by minorities, immigrants, and their supporters.
              </div>
              <div className="techStack">
                  React | Redux | Javascript | Node | Express | Passport | JWT | HTML5 | CSS3 | mLab | Heroku   Netlify | Enzyme | Mocha | Chai
              </div>
              <a className="live btn btn-outline-primary" href="https://shielded-inlet-36595.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/thinkful-ei20/tammy-tharaka-sp" target="_blank" rel="noopener noreferrer">Project Repo</a>   
            </div>

        </div>
    );
}

export default mainPage