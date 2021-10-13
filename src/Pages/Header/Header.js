import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import pressOnBar from './Nav.js';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();

    const navStyle = { color: 'limegreen', fontWeight: 'bold', caretColor: 'transparent', textDecoration: 'none' };
    return (
        <div className="header">
            <nav className="nav">
                <div>
                    <NavLink to="/"><img src="./favicon.ico" className="header-image" width="30px" title="car-services-bd.com" alt="Car-Services" /></NavLink>
                    <NavHashLink className="navlink" activeStyle={navStyle} to="/home#banner">Home</NavHashLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/search"><i className="fas fa-search"></i></NavLink>
                    <NavHashLink className="navlink" activeStyle={navStyle} to="/home#services">Services</NavHashLink>
                    <NavHashLink className="navlink" activeStyle={navStyle} to="/home#experts">Experts</NavHashLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/place-order">Place Order</NavLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/shipping">Shipping</NavLink>
                    {
                        (user?.email || user?.displayName) ?
                            <span>
                                <span className="mx-3 fw-bolder text-success">{user?.displayName}</span>

                                <span className="ms-1 me-4">
                                    <img src={user?.photoURL} width="30px" className="rounded-pill border border-warning border-2" alt={user?.displayName} />
                                </span>

                                <Button onClick={logOut} className="navlink bg-success" variant="contained">Logout</Button>
                            </span>
                            :
                            <NavLink className="navlink" activeStyle={navStyle} to="/login"><Button variant="contained" className="bg-danger">Login</Button></NavLink>
                    }
                </div>
            </nav>

            <nav className="mobile-nav">
                <a href="/"><img src="./favicon.ico" width="30px" title="car-services.com" alt="Car-Services" /></a>
                <i className="fas fa-bars fa-2x" id="menu-bar" onClick={pressOnBar}></i>
            </nav>
            <div className="menu">
                <NavLink className="navlink" activeStyle={navStyle} to="/home">Home</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/search"><i className="fas fa-search"></i></NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/services#services">Services</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/experts/#experts">Experts</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/place-order">Place Order</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/shipping">Shipping</NavLink>
                {
                    (user?.email || user?.displayName) ?
                        <span>
                            <span className="mx-3 fw-bolder text-success">{user?.displayName}</span>

                            <span className="ms-1 me-4">
                                <img src={user?.photoURL} width="30px" className="rounded-pill border border-warning border-2" alt={user?.displayName} />
                            </span>

                            <Button onClick={logOut} className="navlink bg-success" variant="contained">Logout</Button>
                        </span>
                        :
                        <NavLink className="navlink" activeStyle={navStyle} to="/login"><Button variant="contained" className="bg-danger">Login</Button></NavLink>
                }
            </div>
        </div >
    );
};

export default Header;