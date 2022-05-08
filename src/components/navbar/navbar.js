import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Welcome</Link>
                <div className="navbar-nav mr-auto">
                    <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/liste" className="nav-link ">Users</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/ajout" className="nav-link ">Sign Up</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;