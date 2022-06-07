import React from 'react';
import profileImage from '../../Images/profile-img.jpg';
import './Home.css';
import { faGithub, faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typical from 'react-typical';
import ParticlesOptions from '../../ParticlesOptions/ParticlesOptions';

const Home = () => {
    return (
        <div className="home-bg" id="home">
            <header className="container py-5">
                <div className="row pt-5 pb-4"> 
                    <ParticlesOptions></ParticlesOptions>
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
                            <h4 className="text-warning">
                            <small className="text-white">I am a </small>
                                <Typical
                                    steps={[
                                    "Web Developer",
                                    1000,
                                    "React Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,
                                    "Software Quality Assurance Engineer",
                                    1000,
                                    "Software Tester",
                                    ]}
                                    loop={Infinity}
                                    wrapper="span"
                                />
                            </h4>
                            <ul className="social-media list-inline pt-3">
                                <li className="list-inline-item"><a target="_blank" href="https://github.com/mdmahbubulalam"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="https://www.linkedin.com/in/mohammad-mahbubul-alam-2a59291a9/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="https://web.facebook.com/iscomustafi/"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a target="_blank" href="https://twitter.com/Mohamma72291117"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                            </ul>

                            {/* <a role="button" class="btn-color-one text-decoration-none" href="https://drive.google.com/file/d/1-12ff33sHzS1B-8eGrRUwSo1om6ICY7Z/view?usp=sharing" target="_blank">Download Resume</a> */}

                            <a role="button" class="btn-color-one text-decoration-none" href="https://drive.google.com/file/d/1ASMbS1KmEB_mprXjbPJclCVQ5SddtoF3/view?usp=sharing" target="_blank">Download Resume</a>

                            <a role="button" class="btn-color-two text-decoration-none mx-2" href="#resume">Online CV</a>
                        </div>   
                    </div>
                </div>
            </header>
        </div>
        
       
    );
};

export default Home;