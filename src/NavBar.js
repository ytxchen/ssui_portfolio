import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/shared.css';
import './css/navbar.css';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobile: (window.innerWidth < 769),
      mobileMenuExpanded: false
    }

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.setState({isMobile: (window.innerWidth < 769)});
  }

  constructLabelClassNames(label) {
    var classNames = "navbar-label";
    if (this.props.mode===label) {
      classNames += " navbar-label-selected";
    }
    return classNames;
  }

  constructMobileLabelClassNames(label) {
    var classNames = "navbar-label navbar-label-mobile";
    if (this.props.mode===label) {
      classNames += " navbar-label-selected";
    }
    return classNames;
  }

  toggleMobileMenu() {
    this.setState({mobileMenuExpanded: !this.state.mobileMenuExpanded});
  }

  expandMobileMenu() {
    this.setState({mobileMenuExpanded: true});
  }

  closeMobileMenu() {
    this.setState({mobileMenuExpanded: false});
  }

  renderMobileLabels() {
    return (
      <div className={"mobile-label-container" + (this.state.mobileMenuExpanded ? "" : " mobile-menu-hidden")}>

        <Link to="/">
          <div className={this.constructMobileLabelClassNames("works")}>
            WORKS
          </div>
        </Link>

        <Link to="/play">
          <div className={this.constructMobileLabelClassNames("play")}>
            PLAY
          </div>
        </Link>

        <Link to="/photos">
          <div className={this.constructMobileLabelClassNames("photos")}>
            PHOTOS
          </div>
        </Link>

        <Link to="/resume">
          <div className={this.constructMobileLabelClassNames("resume")}>
            RESUME
          </div>
        </Link>

      </div>
    );
  }

  render() {
    if (!this.state.isMobile) {
      return (
        <div className="navbar web-max-width">

          <Link to="/">
            <div className={this.constructLabelClassNames("works")}>
              WORKS
            </div>
          </Link>
          <div className="navbar-label-spacer" />

          <Link to="/play">
            <div className={this.constructLabelClassNames("play")}>
              PLAY
            </div>
          </Link>
          <div className="navbar-label-spacer" />

          <Link to="/photos">
            <div className={this.constructLabelClassNames("photos")}>
              PHOTOS
            </div>
          </Link>
          <div className="navbar-label-spacer" />

          <Link to="/resume">
            <div className={this.constructLabelClassNames("resume")}>
              RESUME
            </div>
          </Link>

          <Link to="/">
            <div className="yutong-logo">
              YUTONG CHEN
            </div>
          </Link>
        </div>     
      );
    }
    else {
      // mobile navbar
      return (
        <div className={"mobile-navbar" + (this.state.mobileMenuExpanded ? " mobile-menu-expanded" : "")}>
          <div className="mobile-yutong-logo">
            YUTONG CHEN
          </div>

          <div className={"mobile-menu-icon" + (this.state.mobileMenuExpanded ? " close-mobile-menu-icon" : "")}
               onClick={this.toggleMobileMenu.bind(this)}/>

          {this.renderMobileLabels()}
        </div>
      );
    }
  }
}

export default NavBar;