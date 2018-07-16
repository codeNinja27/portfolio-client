import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import MainPage from './main-page';
import AboutPage from './about-page';


export class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path="/" component={MainPage} />
                <Route exact path="/about" component={AboutPage} />
            </div>
        );
    }
};