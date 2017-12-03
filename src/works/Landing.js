import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/shared.css';
import '../css/landing.css';

class Greeting extends Component {
    componentDidMount() {
        // Get the components DOM node
        var elem = ReactDOM.findDOMNode(this);
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        window.requestAnimationFrame(function() {
            // Now set a transition on the opacity
            elem.style.transition = "opacity 1500ms";
            // and set the opacity to 1
            elem.style.opacity = 1;
        });
    }

    render() {
        return (
            <div className="greeting">
                Hi, I'm Yutong Chen.
            </div>
        );
    }
}

class Intro extends Component {
    componentDidMount() {
        // Get the components DOM node
        var elem = ReactDOM.findDOMNode(this);
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        setTimeout(() => {
            window.requestAnimationFrame(function() {
                // Now set a transition on the opacity
                elem.style.transition = "opacity 1500ms";
                // and set the opacity to 1
                elem.style.opacity = 1;
            });
        }, 500);
    }

    render() {
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
}

class PortfolioIcon extends Component {
    componentDidMount() {
        // Get the components DOM node
        var elem = ReactDOM.findDOMNode(this);
        // Set the opacity of the element to 0
        elem.style.opacity = 0;
        setTimeout(() => {
            window.requestAnimationFrame(function() {
                // Now set a transition on the opacity
                elem.style.transition = "opacity 1500ms";
                // and set the opacity to 1
                elem.style.opacity = 1;
            });
        }, 1000);
    }

    render() {
        return(
        <div>
            <div className="portfolio-tag horizontal-center">
                    Portfolio
            </div>
            <div className="downward-arrow horizontal-center"></div>
        </div>
        );
    }
}

class Landing extends Component {
    render() {
        return (
            <div className="landing web-max-width">
                <Greeting />
                <Intro />
                <PortfolioIcon />
            </div>
        );
    }
}

export default Landing