import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          activeStyle={{ color: "red" }}
          to="/home"
          className="navbar-brand"
          href="#"
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/contact"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/about"
                className="nav-link"
                href="#"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/detail/:id"
                className="nav-link"
                href="#"
              >
                Detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/profile"
                className="nav-link"
                href="#"
              >
                Profile
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TodoApp
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink to="/todolistapi" className="dropdown-item" href="#">
                    TodolistApi
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeStyle={{ color: "red" }}
                  to="/login"
                  className="nav-link"
                  href="#"
                >
                  Login
                </NavLink>
              </li>
            </ul>

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
