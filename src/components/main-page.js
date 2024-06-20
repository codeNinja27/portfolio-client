import React from 'react';
// import {Link} from 'react-router-dom';
import './main-page.css';

export function mainPage(props) {
    return (
        <div className="mainPage">    

            <div className="project bg-light">
                <h2 className="projectTitle">Encourage Bot</h2>
                <div className="img img2"></div>
                <div className="projectDes">
                    A multi-purpose discord bot that gives you inspiring quotes from an API, gives you random anime characters, and plays music for you! Bonus functions that notice sad words from a list and gives the user cheerful responses from a list of user entered phrases that stored in a database. You need this bot in your life!
                </div>
                <div className="techStack">
                    Python | PostgreSQL | API
                </div>
                <a className="live2 btn btn-outline-primary" href="" rel="noopener noreferrer">Live App</a>
                <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/DiscordBot" target="_blank" rel="noopener noreferrer">Project Repo</a>   
            </div>

            <div className="project bg-light">
                <h2 className="projectTitle">Odin Recipes</h2>
                <div className="img img3"></div>
                <div className="projectDes">
                    I made Odin Recipes only using HTML and CSS as a fun little project to brush up on my CSS and HTML. I had more fun than I thought I would and suprisingly learned new things along the way!
                </div>
                <div className="techStack">
                    HTML | CSS
                </div>
                <a className="live btn btn-outline-primary" href="https://codeninja27.github.io/odin-recipes/index.html" target="_blank" rel="noopener noreferrer">Live App</a>
                <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/odin-recipes" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>

            <div className="project bg-light">
                <h2 className="projectTitle" >Mighty Kinght</h2>
                <div className="img img1"></div>
                <div className="projectDes">
                    Lots of people say knight is their favorite piece on a chess board. But most of the time it won't be able to move to all the places it can go in a chess board. In this C++ program, the knight gets to horse around as much as it wants and move to all the places it can throughout the chessboard using a recursion function!
                </div>
                <div className="techStack">
                    C++  
                </div>
                <a className="live2 btn btn-outline-primary" href="#" rel="noopener noreferrer">Live App</a>
                <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/MightyKnight" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>  


            <div className="project bg-light">
                <h2 className="projectTitle" >Web Scraper</h2>
                <div className="img img4"></div>
                <div className="projectDes">
                    A program that search through google jobs and give me jobs that related to software engineering. In Progress...
                </div>
                <div className="techStack">
                    Python | BeautifulSoup  
                </div>
                <a className="live2 btn btn-outline-primary" href="#" rel="noopener noreferrer">Live App</a>
                <a className="repo btn btn-outline-primary" href="https://github.com/codeNinja27/scraper" target="_blank" rel="noopener noreferrer">Project Repo</a>
            </div>  

        </div>
    );
}

export default mainPage
//onlick of a tag, populate the page dynamically. 
//initially we have to have the page populated already, so maybe have a if case where it would have full content unless user click one of the tags. 
//when the user click on a tag it would go through if cases/switch to see what to populate depending on which tag was clicked.
//you can have a similar funciton for the url path visited...depending on which ?= you can populate the page
//have a home button 