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
                        <h3 class="card-title text-bold">Chandpur Cleaner</h3>
                        <p class="card-text">It's a cleaning service website, where users will be able to order the service, see the service list and write reviews. Admin will be able to see the order list, add a new service and delete a service.</p>
                        <h5 class="card-text technologies"><strong className="text-bold">Technologies:</strong> <span>React.js</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Firebase</span> <span>Heroku</span></h5>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/chandpur-cleaner-client" target="_blank" role="button" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://chandpur-cleaner.web.app/" role="button" target="_blank" className="btn btn-primary">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={projectTwo} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title text-bold">Clover Grocery</h3>
                        <p class="card-text">It's an e-commerce website, where users will be able to order grocery item and view his order list. Admin will be able to see the full order list, add a new item and delete an item.</p>
                        <h5 class="card-text technologies"><strong className="text-bold">Technologies:</strong> <span>React.js</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Firebase</span> <span>Heroku</span></h5>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/clover-grocery-client" target="_blank" role="button" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://fresh-valley-24505.web.app/" role="button" target="_blank" className="btn btn-primary">Live Site</a>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={projectThree} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-title text-bold">AMDb</h3>
                        <p class="card-text ">It's a movie info website where users will be able to search for movies and view detailed information about a movie.</p>
                        <h5 class="card-text technologies"><strong className="text-bold">Technologies:</strong> <span>HTML</span> <span>CSS</span> <span>React.js</span> <span>React Router</span> <span>Bootstrap</span> <span>Api</span> <span>Netlify</span></h5>
                        <div className="text-center">
                            <a href="https://github.com/mdmahbubulalam/amdb-movie-info" role="button" target="_blank" className="btn btn-success mr-2">GitHub</a>
                            <a href="https://amdb-eac01.web.app/" target="_blank" role="button" className="btn btn-primary">Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Projects;