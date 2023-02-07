import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="container resume" id="resume">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 class="resume-title">Education</h3>
          <div class="resume-item">
            <h4>BSC IN COMPUTER SCIENCE & ENGINEERING</h4>
            <p>
              <em>Dhaka International Univercity, Dhaka, Bangladesh</em>
            </p>
          </div>
          <div class="resume-item">
            <h4>DIPLOMA IN COMPUTER TECHNOLOGY</h4>
            <p>
              <em>Sylhet Polytechnic Institute, Sylhet, Bangladesh</em>
            </p>
          </div>

          <h3 class="resume-title">Training and Course Summary</h3>

          <div class="resume-item">
            <h4>Complete Web Development with Jhankar Mahbub</h4>
            <p>
              <em>Programming Hero, Dhaka, Bangladesh</em>
            </p>
          </div>
          <div class="resume-item">
            <h4>THE COMPLETE WEB DEVELOPMENT COURSE WITH ALL LATEST VERSION</h4>
            <p>
              <em>eShikhon, Dhaka, Bangladesh</em>
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <h3 class="resume-title">Work Experience</h3>
          <div class="resume-item">
            <h4>SQA Engineer</h4>
            <h5>December 2022 - Present</h5>
            <p>
              <em>Information Technology Directorate (IT Dte), Bangladesh Army, Dhaka, Bangladesh</em>
            </p>
            <ul>
              <li>Review requirements, specifications and technical design documents to provide timely and meaningful feedback.</li>
              <li>Create, execute and modify test cases.</li>
              <li>Identify, isolate, and track bugs throughout testing.</li>
              <li>Identify any potential problems that users might encounter.</li>
              <li>Perform manual testing on mobile apps.</li>
              <li>Design, develop and execute automation scripts using Appium and Java.</li>
              <li>Document software defects and report defects to software developers.</li>
              <li>Perform thorough regression testing when bugs are resolved.</li>
              <li>Research and analyze product features being tested.</li>
              <li>Research new tools, technologies, and testing processes.</li>
              <li>Review user interfaces for consistency and functionality.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>SQA Engineer</h4>
            <h5>July 2022 - November 2022</h5>
            <p>
              <em>Military Institute of Science and Technology (MIST), Dhaka, Bangladesh</em>
            </p>
            <ul>
              <li>Perform manual testing on mobile apps.</li>
              <li>Design, develop and execute automation scripts using Appium and Java.</li>
              <li>Create, execute and modify test cases.</li>
              <li>Identify software defects and create defects report.</li>
              <li>Report bugs to development teams.</li>
              <li>Perform thorough regression testing when bugs are resolved.</li>
              <li>Prepared user documentation.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>SQA Engineer</h4>
            <h5>July 2021 - June 2022</h5>
            <p>
              <em>IPvision Soft Ltd., Dhaka, Bangladesh</em>
            </p>
            <ul>
              <li>Reviewing and analyzing project requirements.</li>
              <li>Perform different types of manual testing on desktop and mobile apps.</li>
              <li>Creating test script, test scenario, and test summary report.</li>
              <li>Create, execute and modify test cases (If required) and analyze results.</li>
              <li>Identify software defects and create defects report.</li>
              <li>Report bugs and errors to development teams.</li>
              <li>Perform regression testing after changing the code to fix bugs.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h4>SQA Engineer</h4>
            <h5>December 2014 - November 2018</h5>
            <p>
              <em>IPvision Soft Ltd., Dhaka, Bangladesh</em>
            </p>
            <ul>
              <li>Creating documentation and contributing to test plan preparation.</li>
              <li>Perform different types of manual testing on desktop, web, and mobile apps.</li>
              <li>Creating test script, test scenario, and test summary report.</li>
              <li>Create, execute and modify test cases (If required).</li>
              <li>Identify software defects and create defects report.</li>
              <li>Report bugs and errors to development teams.</li>
              <li>Perform regression testing after changing the code to fix bugs.</li>
              <li>Design, develop and execute automation scripts using Selenium and Java.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
