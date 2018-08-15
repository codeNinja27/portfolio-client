import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './main-page';
import TestPage from './main-page2';
import AboutPage from './about-page';
import ContactPage from './contact-page';
import { HeaderBar } from './header-page';
import { FooterBar } from './footer-page';
import './app.css';

// import PropTypes from 'prop-types';

export class App extends React.Component {

 

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Route exact path="/" component={MainPage} />
                <Route exact path="/test" component={TestPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <FooterBar />
            </div>
        );
    }
};