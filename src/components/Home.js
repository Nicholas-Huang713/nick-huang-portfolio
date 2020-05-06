import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {projects} from '../actions';
import '../App.css';

function Home() {
    const dispatch = useDispatch(); 
    return (
        <div className="home-container">
            <div className="home-style">
                <span className="text-light bg-dark fade-in"> Nicholas Huang </span>
                <br/>
                <span className="text-light bg-dark fade-in">Software Developer</span>
                <br/>
                <Link to="/projects" onClick={() => dispatch(projects())}><button className="btn btn-lg btn-light">View Projects</button></Link>
            </div>
        </div>
    )
}

export default withRouter(Home);