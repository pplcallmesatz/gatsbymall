import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

import { Link } from "gatsby"
const ListLink = props => (

<Link activeClassName="active" className={props.className} to={props.to}>{props.children}</Link>

)


class Main extends React.Component{
    render() {
        return (
            <div>
            {/* Navigation Bar */}
            <header>
                <Navbar />
            </header>
        {/* End: Navigation Bar */}
        {/* Body Content */}
            <div>
            { this.props.children }
            </div>
        {/* End: Body Content */}

        {/* Footer */}
        <footer>

        </footer>
        {/* End: Footer */}

        </div>
    );
    }
}
export default Main