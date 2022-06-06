import React from "react";
import "./Projects.css";
import { BsGithub, BsGlobe, BsYoutube } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import projectOne from "../../Images/project-one.jpg";
import projectTwo from "../../Images/project-two.jpg";
import projectThree from "../../Images/project-three.jpg";
import projectFour from "../../Images/project-four.jpg";

const Projects = () => {
  return (
    <section className="container" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>
      <div className="row mb-5 text-justify">
        <div className="col-md-6">
          <img src={projectOne} alt="Project-One-Img" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3 className="text-bold">Alam Egg Villa</h3>
          <p>
            It is a full MERN stack e-commerce website, where users will be able to purchase
            products, view product details, write product reviews, search by
            product name, add products to cart, sort products, add and edit
            shipment information, and sign up and sign in to the web site.
            <br />
            Admin will be able to add, edit, read, delete products, view
            dashboard, delete user comments, delete orders, change order status,
            add and delete admin user from admin panel.
          </p>
          <p>
            <span className="tech-span">React.js</span>
            <span className="tech-span">Node.js</span>
            <span className="tech-span">Express.js</span>
            <span className="tech-span">MongoDB</span>
            <span className="tech-span">Firebase</span>
            <span className="tech-span">Heroku</span>
          </p>

          <div>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/alam-egg-villa-client"
              target="_blank"
              className="github-link"
              data-tip="Client code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/alam-egg-villa-server"
              target="_blank"
              className="github-link"
              data-tip="Server code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://alam-egg-villa.web.app/"
              target="_blank"
              className="github-link"
              data-tip="Website Link"
            >
              <BsGlobe />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://youtu.be/H0vdsn5ioXk"
              target="_blank"
              className="github-link"
              data-tip="Video Link"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mb-5 mt-5 text-justify">
        <div className="col-md-6 ">
          <h3 className="text-bold">Cure Edge</h3>
          <p>
            It's a full MERN stack health care service website, where users will
            be able to book appointments with doctors from different hospitals
            after logging in. Users will be able to sign up / sign in manually
            or by using Google. Users will be able to select hospitals and
            services, view their booking information and write reviews.
            <br />
            Admin will be able to view dashboard, view appointment information
            of each user, change appointment status, and delete appointment.
            Admin will be able to add, edit, read, and delete services, doctor’s
            info and hospitals name. Admin will be able to view each user's
            review, change the status of a review, and delete the review. Admin
            will be able to create and delete admin user.
          </p>
          <p>
            <span className="tech-span">React.js</span>
            <span className="tech-span">Node.js</span>
            <span className="tech-span">Express.js</span>
            <span className="tech-span">MongoDB</span>
            <span className="tech-span">Material-UI</span>
            <span className="tech-span">Firebase</span>
            <span className="tech-span">Heroku</span>
          </p>

          <div>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/cure-edge-client"
              target="_blank"
              className="github-link"
              data-tip="Client code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/cure-edge-server"
              target="_blank"
              className="github-link"
              data-tip="Server code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://cure-edge-auth.web.app/"
              target="_blank"
              className="github-link"
              data-tip="Website Link"
            >
              <BsGlobe />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://youtu.be/3YQGiEcZBtY"
              target="_blank"
              className="github-link"
              data-tip="Video Link"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={projectTwo} alt="Project-Two-Img" className="img-fluid" />
        </div>
      </div>
      <hr />

      <div className="row mt-5 mb-5 text-justify">
        <div className="col-md-6 mb-3">
          <img
            src={projectThree}
            alt="Project-Three-Img"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3 className="text-bold">Clover Grocery</h3>
          <p>
            It's an e-commerce website where users will be able to order grocery
            items and view their order list.
            <br />
            Admin will be able to view full order list, add and delete an item.
          </p>
          <p>
            <span className="tech-span">React.js</span>
            <span className="tech-span">Node.js</span>
            <span className="tech-span">Express.js</span>
            <span className="tech-span">MongoDB</span>
            <span className="tech-span">Firebase</span>
            <span className="tech-span">Heroku</span>
          </p>

          <div>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/clover-grocery-client"
              target="_blank"
              className="github-link"
              data-tip="Client code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/clover-grocery-server"
              target="_blank"
              className="github-link"
              data-tip="Server code"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://fresh-valley-24505.web.app/"
              target="_blank"
              className="github-link"
              data-tip="Website Link"
            >
              <BsGlobe />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="row mt-5 text-justify">
        <div className="col-md-6 mb-3">
          <h3 className="text-bold">View Search Engine</h3>
          <p>
            It's a search engine website, where users can search for anything.
            It will show 10 search results per search.
          </p>
          <p>
            <span className="tech-span">React.js</span>
            <span className="tech-span">API</span>
            <span className="tech-span">Bootstrap</span>
            <span className="tech-span">Firebase</span>
          </p>

          <div>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://github.com/mdmahbubulalam/view-search-engine"
              target="_blank"
              className="github-link"
              data-tip="Code link"
            >
              <BsGithub />
            </a>
            <ReactTooltip
              place="bottom"
              className="tooltip-style"
              effect="float"
            />
            <a
              href="https://view-search-engine.web.app/"
              target="_blank"
              className="github-link"
              data-tip="Website Link"
            >
              <BsGlobe />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <img src={projectFour} alt="Project-four-Img" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
