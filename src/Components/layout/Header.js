
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
const Header = props => {
    const {branding}=props;
    return (
       < nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-1">
           <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> 
                               <i className="fas fa-home"></i> Home 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link"> 
                               <i className="fas fa-plus"></i> AddContact 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link"> 
                               <i className="fas fa-question"></i> About 
                            </Link>
                        </li>
                       
                    </ul>
                </div>
           </div>
       </nav>       
        // <div>
        //     <h1 >{branding}</h1>
        // </div>
    )
}
Header.defaultProps = {
    branding: 'Branding Logo'
}
Header.prototype={
    branding: PropTypes.string.isRequired
}
export default Header;