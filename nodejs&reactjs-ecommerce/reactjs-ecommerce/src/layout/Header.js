import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: '#ff5622' }}
            >
                <NavLink className="navbar-brand" to="/">
                    Navbar
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/products">
                                Products{' '}
                                <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/home">
                                Create <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        
                    </ul>
                    <form className=" w-50 form-inline my-2 my-lg-0 input-group">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="my-2 my-sm-0"
                            style={{background: "#fff"}}
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="ml-4 mr-4" style={{position: "relative"}}>
                        <i className="fa fa-shopping-cart fa-2x"></i>
                        <span className="badge badge-danger" style={{position: "absolute"}}>3</span>
                    </div>
                    <div className="ml-4 mr-4">
                        <i className="fa fa-user fa-2x"></i>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
