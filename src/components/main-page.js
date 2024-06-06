import React from 'react';
// import {Link} from 'react-router-dom';
import './main-page.css';

export function mainPage(props) {
    return (
        <div className="mainPage">    

            <div className="project bg-light">
              <h2 className="projectTitle">Discord Bot</h2>
              <div className="img img2">
              </div>
              <div className="projectDes">
                A muslti-purpose discord bot that inspire, give you inspiring qoutes from an api, and play music for you!
              </div>
              <div className="techStack">
                  Python | PostgreSQL | API
              </div>
              <a className="live2 btn btn-outline-primary" href="" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/DiscordBot" target="_blank" rel="noopener noreferrer">Project Repo</a>   
            </div>

            <div className="project bg-light">
              <h2 className="projectTitle">Odin Recipes</h2>
              <div className="img img3">
              </div>
              <div className="projectDes">
                I made Odin Recipes only using HTML and CSS as a fun little project to brush up on my CSS and HTNL. I had more fun than I thought I would and suprosingly learned new things along the way!
              </div>
              <div className="techStack">
                HTML | CSS
              </div>
              <a className="live btn btn-outline-primary" href="https://codeninja27.github.io/odin-recipes/index.html" target="_blank" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/odin-recipes" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>

            <div className="project bg-light">
              <h2 className="projectTitle" >Calculator Interface</h2>
              <div className="img img1">
              </div>
              <div className="projectDes">
                Comming Soon
              </div>
              <div className="techStack">
                C++ | HTML | CSS 
              </div>
              <a className="live2 btn btn-outline-primary" href="#" rel="noopener noreferrer">Live App</a>
              <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/calculator" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>  

        </div>
    );
}

export default mainPage