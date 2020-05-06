import React, {useState, useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import github from '../images/github2.png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import {useSelector, useDispatch} from 'react-redux';
import {home, about, projects, contact} from '../actions';
import '../App.css';

function NavBar () {
    const currentPage = useSelector(state => state.currentPage)
    const dispatch = useDispatch(); 
    return (
        <nav className={`navbar navbar-expand-lg  ${currentPage==="home" ? "navbar-dark nav-style" : "navbar-dark nav-style-nothome"}`} >
            <Link to="/" onClick={() => dispatch(home())} className="navbar-brand">Nicholas Huang</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse collapse-style" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" onClick={() => dispatch(home())} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" onClick={() => dispatch(about())} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" onClick={() => dispatch(projects())} className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" onClick={() => dispatch(contact())} className="nav-link">Contact</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <a href="mailto:nhuang713@gmail.com"><img src={email} className="nav-icon ml-3" alt="gmail link"/> Email</a>
                </span>
                <span className="navbar-text">
                    <a href="https://github.com/Nicholas-Huang713" target="_blank" rel="noopener noreferrer"><img src={github} className="nav-icon ml-3" alt="github link"/> GitHub</a>
                </span>
                <span className="navbar-text">
                    <a href="https://www.linkedin.com/in/nicholas-huang-990529179/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="nav-icon ml-3" alt="linkedin link" /> LinkedIn</a>
                </span>
            </div>
        </nav>
    )
}

export default withRouter(NavBar);