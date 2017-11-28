import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
    if (this.state.thumbnailDrawerOpen) {
      return <Thumbnails close={this.closeThumbnailDrawer.bind(this)}/>;
    }
  }

  render() {
    return (
      <div>
        <div className="projects-drawer-button open-projects-drawer-button"/>
        <div className="thumbnail-drawer-button open-thumbnail-drawer-button"
             onClick={this.openThumbnailDrawer.bind(this)} />
          {this.renderThumbnailDrawer()}
      </div>
    )
  }
}

export default Photos;