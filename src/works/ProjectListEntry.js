import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    render() {
        var imageLocation = this.props.imageLocation;
        var textFlush = imageLocation;
        var textLocation = this.props.textLocation;
        return (
            <div className="project-list-entry web-max-width">
                <Link to={this.props.content.link}>
                <div className={"project-list-entry-image-container col-3 float-" + imageLocation}>
                  <img className="project-list-entry-image" src={this.props.content.image} alt={this.props.content.title}/>
                </div>
                </Link>

                <div className={"project-list-entry-details col-8 float-" + textLocation}>
                    <div className="project-divider" />

                    <div className={"project-list-entry-title text-align-" + textFlush}>
                      {this.props.content.title}
                    </div>

                    <div className={"project-list-entry-desc text-align-" + textFlush}>
                      {this.props.content.description}
                    </div>

                    <Link to={this.props.content.link}>
                      <div className={"project-list-entry-more text-align-" + textFlush}>
                          More >
                      </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default ProjectListEntry