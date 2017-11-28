import React, { Component } from 'react';
import '../css/shared.css';
import '../css/landing.css';

class Landing extends Component {
    renderGreeting() {
        return (
            <div className="greeting">
                Hi, I'm Yutong Chen.
            </div>
        );
    }

    renderIntro() {
        return (
            <div className="col-12">
                <div className="intro col-8">
                    Currently a master student of Human-Computer Interaction at 
                    Carnegie Mellon University. I completed my Bachelor’s degree in 
                    Computer Science at Carnegie Mellon. My passions are 
                    programming, design, and photography.
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="landing web-max-width">
                {this.renderGreeting()}
                {this.renderIntro()}
                <div className="portfolio-tag horizontal-center">
                    Portfolio
                </div>
                <div className="downward-arrow horizontal-center"></div>
            </div>
        );
    }
}

export default Landing