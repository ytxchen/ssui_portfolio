import React, { Component } from 'react';
import '../css/shared.css';
import '../css/photos.css';

class PhotoProjects extends Component {

  constructor(props) {
    super(props);
    this.projects = [
      {sectionName: "Projects",
       projects: [
         {name: "Unfolding Environments", tag: "ue"},
         {name: "Black and White", tag: "bwi"},
         {name: "Black and White II", tag: "bwii"},
         {name: "New York Stories", tag: "nys"}
       ]},
      {sectionName: "Portraits",
       projects: [
         {name: "Portraits", tag: "portrait"}
       ]},
      {sectionName: "Personal",
       projects: [
         {name: "2016", tag: "mmxvi"},
         {name: "2015", tag: "mmxv"},
         {name: "2014", tag: "mmxiv"}
       ]}
    ]
  }

  close() {
    this.props.close();
  }

  navigateToProject(tag) {
    this.props.goToProject(tag);
    this.close();
  }

  constructClassNames() {
    var classNames = "drawer projects-drawer";
    if (!this.props.isOpen) {
      classNames += " projects-drawer-closed";
    }
    return classNames;
  }

  renderSection(section) {
    return (
      <div className="photo-projects-section"
           key={section.sectionName}>
        <div className="photo-projects-section-label">
          {section.sectionName}
        </div>

        {section.projects.map((project) => {
          return (
            <div className="photo-projects-label"
                 key={project.tag}
                 onClick={() => this.navigateToProject(project.tag)}>
                 {project.name}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className={this.constructClassNames()}>
        {this.projects.map((section, idx) => {
          return this.renderSection(section);
        })}
      </div>
    )
  }
}

export default PhotoProjects;