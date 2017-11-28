import React, { Component } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../css/shared.css';
import '../css/photos.css';

import Thumbnails from './Thumbnails.js';
import PhotoProjects from './PhotoProjects.js'

class Photos extends Component {

  constructor(props) {
    super(props);
    var state = {
      thumbnailDrawerOpen: false,
      projectsDrawerOpen : false
    };
    this.state = state;
  }

  openThumbnailDrawer() {
    this.setState({thumbnailDrawerOpen: true});
  }

  closeThumbnailDrawer() {
    this.setState({thumbnailDrawerOpen: false});
  }

  renderThumbnailDrawer() {
    return (
        <Thumbnails isOpen={this.state.thumbnailDrawerOpen}
                    close={this.closeThumbnailDrawer.bind(this)}/>
    );
  }

  openProjectsDrawer() {
    this.setState({projectsDrawerOpen: true});
  }

  closeProjectsDrawer() {
    this.setState({projectsDrawerOpen: false});
  }

  renderProjectsDrawer() {
    return (
        <PhotoProjects isOpen={this.state.projectsDrawerOpen}
                       close={this.closeProjectsDrawer.bind(this)}/>
    );
  }

  renderThumbnailDrawerButton() {
    if (this.state.thumbnailDrawerOpen) {
      return (
        <div className="thumbnail-drawer-button close-thumbnail-drawer-button"
             onClick={this.closeThumbnailDrawer.bind(this)} />
      );
    } else {
      return (
        <div className="thumbnail-drawer-button open-thumbnail-drawer-button"
             onClick={this.openThumbnailDrawer.bind(this)} />
      );
    }
  }

  renderProjectsDrawerButton() {
    if (this.state.projectsDrawerOpen) {
      return (
        <div className="projects-drawer-button close-projects-drawer-button"
             onClick={this.closeProjectsDrawer.bind(this)} />
      );
    } else {
      return (
        <div className="projects-drawer-button open-projects-drawer-button"
             onClick={this.openProjectsDrawer.bind(this)} />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderProjectsDrawerButton()}
        {this.renderProjectsDrawer()}
        
        {this.renderThumbnailDrawerButton()}
        {this.renderThumbnailDrawer()}

      </div>
    )
  }
}

export default Photos;