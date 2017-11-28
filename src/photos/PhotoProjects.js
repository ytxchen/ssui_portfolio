import React, { Component } from 'react';
import '../css/shared.css';
import '../css/photos.css';

class PhotoProjects extends Component {

  close() {
    this.props.close();
  }

  constructClassNames() {
    var classNames = "drawer projects-drawer";
    if (!this.props.isOpen) {
      classNames += " projects-drawer-closed";
    }
    return classNames;
  }

  render() {
    return (
      <div className={this.constructClassNames()}>
  color: white;
  background: black;
  left: auto;
  right: 0;
  width: 70vw;
  top: 55px;
  height: calc(100% - 55px);
  padding: 0;
  padding-bottom: 30px;
  /*z-index: 2000;*/
  transform: translate3d(0, 0, 0);
  transition: all 400ms cubic-bezier(0.59, 0.07, 0.52, 0.96);
      </div>
    )
  }
}

export default PhotoProjects;