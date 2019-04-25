import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../App.css'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='dd'>
            <header className="header">
                <div className="header-brand">
                <Link style={{textDecoration:'none'}} to='/Home'>
                    <div className="brand">
                        <h1 id="brand">
                        Volunteering.TN
                        <img className="logo" src="https://www.freeiconspng.com/uploads/volunteer-icon-14.png" alt="Donor Shop logo" />
                        </h1>
                    </div>
                    </Link>
                    <nav className="nav-bar">
                        <ul className="nav-menu">
                            <li className="nav-items ">
                                <Link className="nav-link nav-link-active " to="/Organisation"> Organisation </Link>
                            </li>
                         
                            <li className="nav-items">
                                <Link className="nav-link" id="te" to="/About"> About US</Link>
                            </li>

                        </ul>
                    </nav>
                    <nav className="nav-compte">

                        <Link className="sign-link" to="/SignIn"><i className="fas fa-sign-in-alt " id="s"></i></Link>

                        <Link className="basket-link" to="/SignUp"><i className="fas fa-calendar-week " id="f"></i></Link>
                        {/* <span className="nbr-produit">0</span> */}
                    </nav>
                </div>

            </header>
            </div>
        )
    }
}
export default Header;

