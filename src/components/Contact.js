import React, {useState, useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import email from '../images/email.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import location from '../images/location.png';
import ReactMap from 'react-map-gl';
import '../App.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
                width: "100%",
                height: "400px",
                latitude: 34.033150,
                longitude: -117.801691,
                zoom: 10
              },
        }
    }
    
    handleViewportChange = (viewport) => {
        this.setState({
          viewport: { ...this.state.viewport, ...viewport }
        })
    }
    render() {
        return (
                <div className="container mt-3">
                    <div className="page-title text-white">
                        <h3>Contact</h3>
                    </div>
                    <ul className="list-group contact-text">
                        <li className="list-group-item">
                            <img src={email} className="nav-icon" alt="email icon"/> Email
                            <br />
                            <a className="contact-link" href="mailto:nhuang713@gmail.com">nhuang713@gmail.com</a>
                        </li>
                        <li className="list-group-item">
                            <img src={linkedin} className="nav-icon" alt="linkedin icon"/> LinkedIn
                            <br />
                            <a className="contact-link" href="https://www.linkedin.com/in/nicholas-huang-990529179/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nicholas-huang-990529179/</a>
                        </li>
                        <li className="list-group-item">
                            <img src={github} className="nav-icon" alt="github icon"/> GitHub
                            <br />
                            <a className="contact-link" href="https://github.com/Nicholas-Huang713" target="_blank" rel="noopener noreferrer">github.com/Nicholas-Huang713</a>
                        </li>
                        <li className="list-group-item">
                            <img src={location} className="nav-icon" alt="location icon"/> Location
                            <br />
                            Diamond Bar, CA
                        </li>
                    </ul>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-sm"></div>
                            <div className="col-sm-10">
                                <ReactMap
                                    {...this.state.viewport}
                                    onViewportChange={viewport => this.setState({ viewport })}
                                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                                    mapStyle="mapbox://styles/nhuang713/ck8s1ki8t08fc1iqj0yerkni8"
                                >
                                </ReactMap>
                            </div>
                            <div className="col-sm"></div>
                        </div>
                        
                    </li>
                </div>
        )
    }
    
}

export default withRouter(Contact);