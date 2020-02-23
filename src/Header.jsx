import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
      <nav className="ui fixed inverted menu" id="navbar">
        <div className="ui container">
            <Link id="header" className="header item" to="/">
                My Portfolio
            </Link>
            <div className="right menu">
            <div className="ui inverted secondary pointing menu">
                <NavLink
                    id="cv-tab"
                    className="ui item"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/cv"
                >
                    CV
                </NavLink>
                <NavLink
                    id="projects-tab"
                    className="ui item"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/projects"
                >
                    Projects
                </NavLink>
                <NavLink
                    id="contact-tab"
                    className="ui item"
                    activeStyle={{ fontWeight: "bold" }}
                    to="/contact"
                >
                    Contact
                </NavLink>
                </div>
            </div>
        </div>
      </nav>
    );
};

export default Header;