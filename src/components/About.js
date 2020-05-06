import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import css from '../images/css.png';
import dotnet from '../images/dotnet.png';
import html from '../images/html.png';
import javascript from '../images/javascript.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';
import react from '../images/reactlogo.png';
import mysql from '../images/mysql.png';
import '../App.css';

function About() {
    return (
            <div className="container mt-3">
                <div className="border">
                    <div className="page-title text-white mb-3">
                        <h3>About Me</h3>
                    </div>
                    <p className="m-3">
                        I am a Software Developer that enjoys building full-stack web applications. Coming from a background in media, I enjoy web development because it allows me to not only challenge myself, but also to tap into my creative side.
                        I am very excited to have the chance to join a professional environment where I can continue to grow my knowledge and collaborate with others in the same field.
                    </p>
                    <div className="page-title text-white mb-5 mt-3">
                        <h3>Skills</h3>
                    </div>
                    <div className="row text-center">
                        <div className="col-sm">
                            <h4 className="ml-5">Languages</h4>
                            <ul> 
                                <li>Javascript</li>
                                <li>C#</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                            <h4 className="ml-5">Frameworks/Technologies: </h4>
                            <ul>
                                <li>ReactJS/Redux</li>
                                <li>ASP .Net Core</li>
                                <li>Mongoose</li>
                                <li>Bootstrap</li>
                                <li>ExpressJS</li>
                                <li>NodeJS</li>
                            </ul>
                            <h4 className="ml-5">Back-End Technologies: </h4>
                            <ul>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="col-sm text-center mt-5">
                            <img src={html} className="tech-icon" alt="technology" />
                            <img src={css} className="tech-icon" alt="technology" />
                            <img src={dotnet} className="tech-icon" alt="technology" />
                            <img src={javascript} className="tech-icon" alt="technology" />
                            <br/>
                            <img src={mongo} className="tech-icon" alt="technology" />
                            <img src={node} className="tech-icon" alt="technology" />
                            <img src={react} className="tech-icon" alt="technology" />
                            <img src={mysql} className="tech-icon" alt="technology" />
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(About);