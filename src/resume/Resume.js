import React, { Component } from 'react';
import '../css/shared.css';
import '../css/resume.css';

import Footer from '../Footer.js';

class Resume extends Component {

  renderExperience(){
    return (
      <div>
        <div className="section-label">
          EXPERIENCE
        </div>



        <div className="organization-position-label">
          GOOGLE - SOFTWARE ENGINEER INTERN      
        </div>
        <div className="date-time-label">
          New York City, NY | May 2017 - Aug 2017
        </div>

        <div className="description-body">
          Developed user added search result feature for Legal Search, allowing users to customize search results and share customized results among all Legal Search users. Implemented frontend in AngularJS and TypeScript, and backend in Java.
        </div>



        <div className="organization-position-label">
          AMAZON.COM - SOFTWARE ENGINEER INTERN      
        </div>
        <div className="date-time-label">
          Cambridge, MA | Aug 2016 - Nov 2016
        </div>

        <div className="description-body">
          Developed a web-based data partition manager for Alexa’s machine learning platform, allowing data scientists to edit partition assignments of data samples. Technologies involve jQuery, Tomcat web server, Java RPC server, and AWS.
        </div>



        <div className="organization-position-label">
          BLOOMBERG L.P. - SOFTWARE ENGINEER INTERN      
        </div>
        <div className="date-time-label">
          New York City, NY | May 2016 - Aug 2016
        </div>

        <div className="description-body">
          Implemented a customizable UI for  nancial portfolio managers to con gure trade ticket screens. Developed a management console with controlled access so that admins can create and delete templates, while users can view and select their con gurations.
        </div>



        <div className="organization-position-label">
          CARNEGIE MELLON-UNIVERSITY - TEACHING ASSISTANT     
        </div>
        <div className="date-time-label">
          Pittsburgh, PA | May 2015 - May 2016
        </div>

        <div className="description-body">
        Courses include: <br />
        15210 - Parallel and Sequential Data Structure and Algorithms <br/>
        15122 - Principles of Imperative Computation <br/>
        15112 - Fundamentals of Programming and Computer Science <br/>
        </div>

      </div>
    );
  }

  renderEducation() {
    return (
      <div>
        <div className="section-label">
          EDUCATION
        </div>



        <div className="organization-position-label">
          CARNEGIE MELLON UNIVERSITY     
        </div>
        <div className="date-time-label">
          Pittsburgh, PA | Aug 2017 - Aug 2018
        </div>

        <div className="description-body">
          Master of Human-Computer Interaction <br/>
          Courses: User-Centered Research, Interaction Design, Service Design
        </div>



        <div className="organization-position-label">
          CARNEGIE MELLON UNIVERSITY     
        </div>
        <div className="date-time-label">
          Pittsburgh, PA | Aug 2013 - May 2017
        </div>

        <div className="description-body">
          Bachelor of Science in Computer Science <br/>
          Minor in Photography <br/>
          Cumulative GPA: 3.94/4 
          <br/><br/>
          Courses: Distributed Systems, Parallel Computer Architecture, Algorithm Design and Analysis, Parallel Algorithms, Machine Learning, Comuter Vision

        </div>

      </div>
    );
  }

  renderSectionDivider() {
    return (
      <hr className="section-divider"/>
    );
  }

  render() {
    return (
      <div>
      <div className="resume-max-width">
        {this.renderExperience()}

        {this.renderSectionDivider()}

        {this.renderEducation()}
      </div>
      <Footer />
      </div>
    )
  }
}

export default Resume;