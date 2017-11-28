import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/shared.css';

class NavBar extends Component {

    renderWorksLabel() {
      if (this.props.mode==='works') {
        return (
          <div className="navbar-label navbar-label-selected">
            WORKS
          </div>
        );
      } else {
        return (
          <Link to="/">
            <div className="navbar-label">
              WORKS
            </div>
          </Link>
        );
      }
    }

    renderPlayLabel() {
      if (this.props.mode==='play') {
        return (
          <div className="navbar-label navbar-label-selected">
            PLAY
          </div>
        );
      } else {
        return (
          <Link to="/play">
            <div className="navbar-label">
              PLAY
            </div>
          </Link>
        );
      }
    }

    renderPhotosLabel() {
      if (this.props.mode==='photos') {
        return (
          <div className="navbar-label navbar-label-selected">
            PHOTOS
          </div>
        );
      } else {
        return (
          <Link to="/photos">
            <div className="navbar-label">
              PHOTOS
            </div>
          </Link>
        );
      }
    }

    renderResumeLabel() {
      if (this.props.mode==='resume') {
        return (
          <div className="navbar-label navbar-label-selected">
            RESUME
          </div>
        );
      } else {
        return (
          <Link to="/resume">
            <div className="navbar-label">
              RESUME
            </div>
          </Link>
        );
      }
    }

    render() {
        return (
            <div className="navbar web-max-width">

                {this.renderWorksLabel()}
                <div className="navbar-label-spacer" />
                {this.renderPlayLabel()}
                <div className="navbar-label-spacer" />
                {this.renderPhotosLabel()}
                <div className="navbar-label-spacer" />
                {this.renderResumeLabel()}

                <div className="yutong-logo">
                  <Link to="/">
                    YUTONG CHEN
                  </Link>
                </div>
            </div>     
        );
    }
}

export default NavBar;