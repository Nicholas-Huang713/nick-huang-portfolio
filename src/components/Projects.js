import React from 'react';
import {withRouter} from 'react-router-dom';
import fishazon from '../images/fishazon.png';
import ohsnap from '../images/ohsnap.png';
import hiphop from '../images/hiphop.png';
import '../App.css';

function Projects() {
    return (
            <div className="container mt-3">
                <div className="page-title text-white">
                    <h3>Projects</h3>
                </div>
                <div className="border mb-5">
                    <div className="row mt-4 mb-5">
                        <div className="col-sm text-center">
                            <a href="http://13.52.231.251/" target="_blank" rel="noopener noreferrer">
                                <img src={fishazon} className="img-thumbnail project-img" alt="project preview"/>
                            </a>
                        </div>
                        <div className="col-sm">
                            <h5>Fishazon</h5>
                            <p>
                               Technologies/Languages: <span className="text-white bg-dark">C#</span>, <span className="text-white bg-dark">ASP.Net Core</span>, <span className="text-white bg-dark">MySQL</span>, <span className="text-white bg-dark">Bootstrap</span>
                            </p>
                            <p>
                                Fishazon is an e-commerce website for all fishing supplies. Users can create an account to add products to their cart and keep a detailed log of past and current orders.
                                This website was built with C# utilizing the ASP.Net framework and a MySQL backend. 
                            </p>
                            <p>
                                <a href="http://13.52.231.251/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark mr-1">Demo</button>
                                </a>  
                                <a href="https://github.com/Nicholas-Huang713/Fishazon" target="_blank" rel="noopener noreferrer"> 
                                    <button className="btn btn-sm btn-outline-dark">Code</button>
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5 mb-5">
                        <div className="col-sm text-center">
                            <a href="https://mernohsnap.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={ohsnap} className=" img-thumbnail project-img" alt="project preview"/>
                            </a>
                        </div>
                        <div className="col-sm">
                            <h5>OhSnap</h5>
                            <p>
                               Technologies/Languages: <span className="text-white bg-dark">JavaScript</span>, <span className="text-white bg-dark">ReactJS/Redux</span>, <span className="text-white bg-dark">MongoDB</span>, <span className="text-white bg-dark">NodeJS</span>, <span className="text-white bg-dark">ExpressJS</span>, <span className="text-white bg-dark">Bootstrap</span>
                            </p>
                            <p>
                                OhSnap is an image uploading website based off Instagram. Users can upload images, view other user's albums, comment and add to their favorites.
                                This website was built with JavaScript utilizing ReactJS for the frontend and a MongoDB backend.
                            </p>
                            <p>
                                <a href="https://mernohsnap.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark mr-1">Demo</button>
                                </a>  
                                <a href="https://github.com/Nicholas-Huang713/OhSnap" target="_blank" rel="noopener noreferrer"> 
                                    <button className="btn btn-sm btn-outline-dark">Code</button>
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row mt-5 mb-5">
                        <div className="col-sm text-center">
                            <a href="https://hiphopapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={hiphop} className="img-thumbnail project-img" alt="project preview"/>
                            </a>
                        </div>
                        <div className="col-sm">
                            <h5>Hip Hop History</h5>
                            <p>
                            Technologies/Languages: <span className="text-white bg-dark">JavaScript</span>, <span className="text-white bg-dark">ReactJS</span>, <span className="text-white bg-dark">MongoDB</span>, <span className="text-white bg-dark">NodeJS</span>, <span className="text-white bg-dark">ExpressJS</span>, <span className="text-white bg-dark">Bootstrap</span>
                            </p>
                            <p>
                                Hip Hop History is a website introducing users to hip hop music from different time periods. Users can add songs to their playlist and view other user's playlists.
                                This website was built with JavaScript utilizing ReactJS for the frontend and a MongoDB backend.
                            </p>
                            <p>
                                <a href="https://hiphopapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-sm btn-dark mr-1">Demo</button>
                                </a>  
                                <a href="https://github.com/Nicholas-Huang713/Hip-Hip-History" target="_blank" rel="noopener noreferrer"> 
                                    <button className="btn btn-sm btn-outline-dark">Code</button>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default withRouter(Projects);