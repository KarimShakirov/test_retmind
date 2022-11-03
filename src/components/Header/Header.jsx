import React from 'react';
import './header.css';
import {Container} from "react-bootstrap";

import {NavLink, Link} from "react-router-dom";

const NAV__LINKS = [{
    display: 'Home', url: '/home'
}, {
    display: 'Market', url: '/market'
}, {
    display: 'Create', url: '/create'
}, {
    display: 'Contact', url: '/contact'
},]

const Header = () => {
    return (<header className="header">
        <Container>
            <div className="navigation">
                <div className="logo">
                    <Link to="/home" className=" text-decoration-none ">
                        <h2 className=" d-flex gap-2 align-items-center ">
                            <span>
                                <i className="ri-vip-diamond-fill"></i>
                            </span>
                            Karim
                            NFTs
                            Collection
                        </h2>
                    </Link>
                </div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        {NAV__LINKS.map((item, index) => (
                            <li key={index} className="nav__item">
                                <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>
                                    {item.display}
                                </NavLink>
                            </li>))}
                    </ul>
                </div>
            </div>
        </Container>
    </header>);
};

export default Header;