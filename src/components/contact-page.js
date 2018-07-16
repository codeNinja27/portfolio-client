import React from 'react';
import {Link} from 'react-router-dom';

export function contactPage(props) {
    return (
        <div className="contact">
            <div className="contact">
                <h1>Contact Info</h1>
            </div>
            <Link className="portfolio" to="/">Portfolio</Link>
        </div>
    );
}

export default contactPage