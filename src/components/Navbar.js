import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Turing.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link active">
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {props.loggedInUser && <span> {props.loggedInUser.name}</span>}
              <Link to="/userProfile" className="nav-link active">
                <p className="mx-2">
                <i className="bi bi-person-circle"></i>
                </p>
              
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
