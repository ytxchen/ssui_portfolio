import React, { Component } from 'react';
import { CSSTransition} from 'react-transition-group';
import '../css/shared.css';
import '../css/photos.css';

import Thumbnails from './Thumbnails.js';
import PhotoProjects from './PhotoProjects.js'

const MainFrameAnimation = ({ children, ...props }) => {
  var classNames = "fade";
  if (props.animationstyle!=="fade") {
    classNames = "main-frame-" + props.animationstyle;
  }
  return (
  <CSSTransition
    {...props}
    timeout={400}
    classNames={classNames}
  >
    {children}
  </CSSTransition>
  );
};

const PrevFrameAnimation = ({ children, ...props }) => {
  var classNames = "fade";
  if (props.animationstyle!=="fade") {
    classNames = "prev-frame-" + props.animationstyle;
  }
  return (
  <CSSTransition
    {...props}
    timeout={400}
    classNames={classNames}
  >
    {children}
  </CSSTransition>
  );
};

const NextFrameAnimation = ({ children, ...props }) => {
  var classNames = "fade";
  if (props.animationstyle!=="fade") {
    classNames = "next-frame-" + props.animationstyle;
  }
  return (
  <CSSTransition
    {...props}
    timeout={400}
    classNames={classNames}
  >
    {children}
  </CSSTransition>
  );
};

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thumbnailDrawerOpen: false,
      projectsDrawerOpen : false,
      currentProject: "mmxvi",
      currentFrame: 1,
      inTransition: false,
      animationstyle: "to-left"
    };
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

  constructPrevFrameSrc() {
    if (this.hasPrevFrame) {
      var tag = this.state.currentProject;
      var frame = this.state.currentFrame - 1;
      var src = './projects/' + tag + '/full/' + tag + '-';
      src += frame < 10 ? ('0' + frame.toString()) : (frame.toString());
      src += '.jpg';
      return src;
    }
  }

  constructNextFrameSrc() {
    if (this.hasNextFrame) {
      var tag = this.state.currentProject;
      var frame = this.state.currentFrame + 1;
      var src = './projects/' + tag + '/full/' + tag + '-';
      src += frame < 10 ? ('0' + frame.toString()) : (frame.toString());
      src += '.jpg';
      return src;
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

  renderScreenCover() {
    if (this.state.projectsDrawerOpen || this.state.thumbnailDrawerOpen) {
      return (
        <div className="screen-cover"
             onClick={this.closeDrawers.bind(this)} />
      );
    }
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
      <MainFrameAnimation in={!this.state.inTransition}
                          animationstyle={this.state.animationstyle}>
        <img className="main-frame-view"
             src={require(`${src}`)}
             alt={src} 
             key={src}/>
      </MainFrameAnimation>
    );
  }

  renderPrevFramePreview() {
    if (this.hasPrevFrame()) {
    var src = this.constructPrevFrameSrc();
    return (
      <PrevFrameAnimation in={!this.state.inTransition}
                          animationstyle={this.state.animationstyle} >
        <img className="prev-frame-view"
             src={require(`${src}`)}
             alt={src} 
             onClick={this.goToPrevFrame.bind(this)}/>
      </PrevFrameAnimation>
    );
    }
  }

  renderNextFramePreview() {
    if (this.hasNextFrame()) {
    var src = this.constructNextFrameSrc();
    return (
      <NextFrameAnimation in={!this.state.inTransition}
                          animationstyle={this.state.animationstyle} >
        <img className="next-frame-view"
          src={require(`${src}`)}
          alt={src} 
          onClick={this.goToNextFrame.bind(this)}/>
      </NextFrameAnimation>
    );
    }
  }

  renderFrameCount() {
    if (this.hasNextFrame()) {
      return (
        <div className="frame-count">
          {this.state.currentFrame}/{this.projectFrames[this.state.currentProject]}
        </div>
      );
    }
  }

  renderLabelNav() {
    return (
      <div className="footer-label">
        <span className={"label-nav" + (this.hasPrevFrame() ? "" : " label-nav-disabled")}
              onClick={this.goToPrevFrame.bind(this)}>
              prev 
        </span>
        <span>      |      </span>
        <span className={"label-nav" + (this.hasNextFrame() ? "" : " label-nav-disabled")}
              onClick={this.goToNextFrame.bind(this)}>
               next
        </span>
      </div>
    );
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

  hasNextFrame() {
    return (this.state.currentFrame < this.projectFrames[this.state.currentProject]);
  }

  hasPrevFrame() {
    return (this.state.currentFrame > 1);
  }

  goToNextFrame() {
    if (this.hasNextFrame()) {
      this.setState({inTransition:true, animationstyle: "to-left"});
      setTimeout(() => {
        this.goToFrame(this.state.currentProject, this.state.currentFrame + 1);
        this.setState({ inTransition: false });
      }, 200);
    }
  }

  goToPrevFrame() {
    if (this.hasPrevFrame()) {
      this.setState({inTransition:true, animationstyle: "to-right"});
      setTimeout(() => {
        this.goToFrame(this.state.currentProject, this.state.currentFrame - 1);
        this.setState({ inTransition: false });
      }, 200);
    }
  }

  render() {
    return (
      <div>
        {this.renderProjectsDrawerButton()}
        {this.renderProjectsDrawer()}

        {this.renderThumbnailDrawerButton()}
        {this.renderThumbnailDrawer()}

        {this.renderScreenCover()}

        {this.renderPrevFramePreview()}
        {this.renderPhotoDisplay()}
        {this.renderNextFramePreview()}

        {this.renderFrameCount()}
        {this.renderLabelNav()}
      </div>
    )
  }
}


export default Photos;