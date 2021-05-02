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
                        <h5>2014 - 2018</h5>
                        <p><em>IPVision Limited, Dhaka, Bangladesh</em></p>
                        <ul>
                            <li>Analyzed requirements and developed test plans, test scenarios, test cases, test summary reports.</li>
                            <li>Perform different types of manual testing.</li>
                            <li>Inform the test lead about what all resources will be required for software testing.</li>
                            <li>Develop, execute, modifying (If required)  test cases and prioritize testing activities.</li>
                            <li>Carry out regression testing every time when changes are made to the code to fix defects.</li>
                            <li>Report defects and creates defect reports for QA Management.</li>
                            <li>Develop documentation and contributing in Test plan preparations.</li>
                            <li>Worked with all platforms of ringID (Android, iOS, Desktop and Web).</li>
                            <li>Worked with issue tracker Redmine, GitLab.</li>
                            <li>Worked with selenium web driver and perform basic automation task.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;