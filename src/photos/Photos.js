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
      projectsDrawerOpen : false,
      currentProject: "mmxvi",
      currentFrame: 1
    };
    this.state = state;
    this.projectFrames = {
      'ue': 16,
      'bwi': 20,
      'bwii': 15,
      'nys': 22,
      'portrait': 16,
      'mmxvi': 15,
      'mmxv': 13,
      'mmxiv': 18
    }
  }

  constructPhotoSrc() {
    var tag = this.state.currentProject;
    var frame = this.state.currentFrame;
    var src = './projects/' + tag + '/full/' + tag + '-';
    src += frame < 10 ? ('0' + frame.toString()) : (frame.toString());
    src += '.jpg';
    return src;
  }

  openThumbnailDrawer() {
    this.setState({thumbnailDrawerOpen: true});
  }

  closeThumbnailDrawer() {
    this.setState({thumbnailDrawerOpen: false});
  }

  openProjectsDrawer() {
    this.setState({projectsDrawerOpen: true});
  }

  closeProjectsDrawer() {
    this.setState({projectsDrawerOpen: false});
  }

  closeDrawers() {
    this.closeProjectsDrawer();
    this.closeThumbnailDrawer();
  }

  renderProjectsDrawer() {
    return (
        <PhotoProjects isOpen={this.state.projectsDrawerOpen}
                       close={this.closeDrawers.bind(this)}
                       goToProject={this.goToProject.bind(this)}/>
    );
  }

  renderThumbnailDrawer() {
    return (
        <Thumbnails isOpen={this.state.thumbnailDrawerOpen}
                    close={this.closeDrawers.bind(this)}
                    goToFrame={this.goToFrame.bind(this)}/>
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

  renderPhotoDisplay() {
    var src = this.constructPhotoSrc();
    return (
      <img className="photo-frame"
           src={require(`${src}`)}
           alt={src} />
    );
  }

  renderFrameCount() {
    return (
      <div className="frame-count">
        {this.state.currentFrame}/{this.projectFrames[this.state.currentProject]}
      </div>
    )
  }

  goToProject(project) {
    this.goToFrame(project, 1);
  }

  goToFrame(project, frame) {
    this.setState({
      currentProject: project,
      currentFrame: frame
    });
  }

  render() {
    return (
      <div>
        {this.renderProjectsDrawerButton()}
        {this.renderProjectsDrawer()}

        {this.renderThumbnailDrawerButton()}
        {this.renderThumbnailDrawer()}

        {this.renderPhotoDisplay()}
        {this.renderFrameCount()}
      </div>
    )
  }
}

export default Photos;