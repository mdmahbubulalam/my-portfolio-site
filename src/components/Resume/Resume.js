import React from 'react';
import './Resume.css'

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
                        <p><em>Dhaka International Univercity, Dhaka, Bangladesh</em></p>
                    </div>
                    <div class="resume-item">
                        <h4>DIPLOMA IN COMPUTER TECHNOLOGY</h4>
                        <p><em>Sylhet Polytechnic Institute, Sylhet, Bangladesh</em></p>
                    </div>

                
                    <h3 class="resume-title">Training and Course Summary</h3>
                
                    <div class="resume-item">
                        <h4>THE COMPLETE WEB DEVELOPMENT COURSE WITH ALL LATEST VERSION</h4>
                        <p><em>eShikhon, Dhaka, Bangladesh</em></p>
                    </div>
                    <div class="resume-item">
                        <h4>Complete Web Development with Jhankar Mahbub</h4>
                        <p><em>Programming Hero, Dhaka, Bangladesh</em></p>
                    </div>
                </div>
                   
                <div className="col-lg-6">
                    <h3 class="resume-title">Work Experience</h3>
                    <div class="resume-item">
                        <h4>SQA Engineer</h4>
                        <h5>2021 - Present</h5>
                        <p><em>IPVision Limited, Dhaka, Bangladesh</em></p>
                        <ul>
                           <li>Analyzing project requirements and provided testing scope.</li>
                           <li>Develop documentation and contribute to test plan preparations.</li>
                           <li>Perform different types of manual testing on desktop and mobile apps.</li>
                           <li>Developed test script, test scenario, and test summary report.</li>
                           <li>Create, execute and modify test cases (If required) and prioritize testing activities.</li>
                           <li>Identifies and reports software defects and test findings using defect tracking tool.</li>
                           <li>Carry out regression testing every time code is changed to fix defects.</li>
                        </ul>
                    </div>
                    <div class="resume-item">
                        <h4>SQA Engineer</h4>
                        <h5>2014 - 2018</h5>
                        <p><em>IPVision Limited, Dhaka, Bangladesh</em></p>
                        <ul>
                           <li>Understanding project requirements.</li>
                           <li>Perform different types of manual testing on desktop, web, mobile apps.</li>
                           <li>Developed test script, test scenario, and test summary report.</li>
                           <li>Create, execute and modify test cases (If required).</li>
                           <li>Identifies and reports software defects and test findings using defect tracking tool.</li>
                           <li>Carry out regression testing every time code is changed to fix defects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;