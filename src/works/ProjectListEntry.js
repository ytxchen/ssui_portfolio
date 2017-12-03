import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import '../css/shared.css';
import '../css/landing.css';

/* Props format

{
    imageLocation: "left" || "right",
    textLocation: : "left" || "right",
    link: "/my-awesome-project"
    content: {
        image: imageFile,
        title: "My Awesome Project",
        description: "awesome project for cute puppies"
    }
}

*/

class ProjectListEntry extends Component {

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
        }, 1500);
    }

    constructor(props) {
        super(props);

        this.state = {
            isMobile: (window.innerWidth < 769)
        }

        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        this.setState({isMobile: (window.innerWidth < 769)});
    }

    renderMobileDivider() {
        if (this.state.isMobile) {
            return (
                <div className="mobile-project-divider" />
            );
        }
    }

    renderProjectDivider() {
        if (!this.state.isMobile) {
            return (
                <div className="project-divider" />
            );
        }
    }

    renderMoreTag(textFlush) {
        if (!this.state.isMobile) {
            return (
                <Link to={this.props.content.link}>
                    <div className={"project-list-entry-more text-align-" + textFlush}>
                        More >
                    </div>
                </Link>
            )
        }
    }

    render() {
        var imageLocation = this.props.imageLocation;
        var textFlush = this.state.isMobile ? "left" : imageLocation;
        var textLocation = this.props.textLocation;
        return (
            <div className="project-list-entry web-max-width">
                {this.renderMobileDivider()}

                <Link to={this.props.content.link}>
                <div className={"project-list-entry-image-container col-3 float-" + imageLocation}>
                  <img className="project-list-entry-image" src={this.props.content.image} alt={this.props.content.title}/>
                </div>
                </Link>

                <div className={"project-list-entry-details col-8 float-" + textLocation}>
                    {this.renderProjectDivider()}

                    <Link to={this.props.content.link}>
                        <div className={"project-list-entry-title text-align-" + textFlush}>
                          {this.props.content.title}
                        </div>
                    </Link>
                    

                    <div className={"project-list-entry-desc text-align-" + textFlush}>
                      {this.props.content.description}
                    </div>

                    {this.renderMoreTag(textFlush)}
                </div>
            </div>
        )
    }
}


export default ProjectListEntry