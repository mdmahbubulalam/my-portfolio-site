import React from 'react';
import profileImage from '../../Images/profile-img.jpg';
import './Home.css';
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="home-bg">
            <header className="container py-5">
                <div className="row pt-5 pb-4">
                    <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className="profile-img">
                            <img src={profileImage} alt="" className="rounded-circle"/>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 text-white d-flex align-items-center">
                        <div>
                            <h2>
                                My name is <span className="text-color">Mohammad Mahbubul Alam</span>
                            </h2>
                            <h4>Web Developer</h4>
                            <ul className="social-media list-inline pt-3">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            </ul>
                            <a role="button" class="btn btn-color" href="../../resume/Resume of Mohammad Mahbubul Alam.pdf" download>Dwonload Resume</a>
                            <a role="button" class="btn btn-color mx-2" href="assets/resume/Resume%20Of%20Mohammad%20Mahbubul%20Alam.pdf">Online CV</a>
                        </div>   
                    </div>
                </div>
            </header>
        </div>
       
    );
};

export default Home;