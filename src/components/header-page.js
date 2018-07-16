import React from 'react';
// import {connect} from 'react-redux';
// import {clearAuth} from '../actions/auth';
// import {clearAuthToken} from '../local-storage';

// import './header-bar.css';


export class HeaderBar extends React.Component {
    // logOut() {
    //     this.props.dispatch(clearAuth());
    //     clearAuthToken();
    // }

    render() {
        // Only render the log out button if we are logged in
        // let logOutButton;
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //         <li><button className="button" onClick={() => this.logOut()}>Log out</button></li>
        //     );
        // } 
        return (
            <div className="portfolio-bar-container">
            <div className="header-bar">
                <h1>Full Stack Web Developer Vash</h1>
            </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(HeaderBar);
