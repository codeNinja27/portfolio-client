import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import MainPage from './main-page';
import AboutPage from './about-page';
import ContactPage from './contact-page';


export class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={MainPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
            </div>
        );
    }
};