import React from 'react';
import './Projects.css';
import projectOne from '../../Images/project-one.jpg';
import projectTwo from '../../Images/project-two.jpg';
import projectThree from '../../Images/project-three.jpg';

const Projects = () => {

    return (
        <section className="container" id="projects">
        <div className="section-title">
            <h2>Projects</h2>
        </div>
        <div className="row">
            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src={projectOne} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Chandpur Cleaner</h3>
                        <p class="card-text">It's a cleaning service website, where users will be able to order the service, see the service list and write reviews. Admin will be able to see the order list, add a new service and delete a service.</p>
                        <p class="card-text"><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB, Firebase, Heroku.</p>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/chandpur-cleaner-client" target="_blank" role="button" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://chandpur-cleaner.web.app/" role="button" target="_blank" className="btn btn-success">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={projectTwo} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Clover Grocery</h3>
                        <p class="card-text">It's an e-commerce website, where users will be able to order grocery item and view his order list. Admin will be able to see the full order list, add a new item and delete an item.</p>
                        <p class="card-text"><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB, Firebase, Heroku.</p>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/clover-grocery-client" target="_blank" role="button" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://fresh-valley-24505.web.app/" role="button" target="_blank" className="btn btn-success">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={projectThree} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title">Premier League Tracker</h3>
                        <p class="card-text">It's a website about English Premier League teams where users will be able to see team details information.</p>
                        <p class="card-text"><strong>Technologies:</strong> HTML, CSS, React.js, React Router, Bootstrap, API, Netlify.</p>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/make-world-eleven" role="button" target="_blank" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://zealous-kepler-483a64.netlify.app/" target="_blank" role="button" className="btn btn-success">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Projects;