import React from 'react';
import './About.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <section className="container" id="about">
            <div className="section-title">
                <h2>About</h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p className="text-justify">I am Mohammad Mahbubul Alam. I describe myself as a passionate developer who loves coding and the web platform. At present, I am seeking a challenging and rewarding position as a Web Developer, with a strong will to prosper in any assigned duties.</p>
                    <p>I am passionate about new challenges. I like to learn new things, adapt myself in any situations and be up-to-date.</p>


                    <div className="text-height">
                        <p><span className="text-bold">Email:</span> alam.diu13@gmail.com</p>
                        <p><span className="text-bold">Phone:</span> +880 1836883501</p>
                        <p><span className="text-bold">Education:</span> BSc in CSE</p>
                        <p><span className="text-bold">Address:</span> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="technologies">
                        <p className="text-bold">Comfortable:</p>
                        <span>JavaScript</span>
                        <span>ES6</span>
                        <span>React.js</span>
                        <span>React Router</span>
                        <span>React Bootstrap</span>
                        <span>Rest API</span>
                        <span>Bootstrap</span><br/>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Software QA</span>
                        <span>Manual Testing</span>
                        

                        <p className="text-bold mt-4">Familiar:</p>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Material UI</span>
                        <span>React Native</span>
                        <span>JSON</span>
                        <span>SASS</span>
                        <span>MongoDB</span>
                        <span>MySQL</span><br/>
                        <span>PHP</span>
                        <span>Laravel</span>
                        <span>jQuery</span>
                        <span>TypeScript</span>
                        <span>Java</span>
                        <span>OOP</span>
                        <span>Automation Testing</span>
                        

                        <p className="text-bold mt-4">Tools:</p>
                        <span>GitHub</span>
                        <span>GitLab</span>
                        <span>Jira</span>
                        <span>Redmine</span>
                        <span>VS Code</span>
                        <span>PhpStorm</span>
                        <span>NetBeans</span>
                        <span>Firebase</span><br/>
                        <span>Netlify</span>
                        <span>Heroku</span>
                        <span>Chrome Dev Tool</span>
                        
                    </div> 
                </div>
            </div>
        </section>
    );
};

export default About;