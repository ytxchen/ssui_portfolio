import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './css/shared.css';
import './css/navbar.css';

class NavBar extends Component {

    constructLabelClassNames(label) {
      var classNames = "navbar-label";
      if (this.props.mode===label) {
        classNames += " navbar-label-selected";
      }
      return classNames;
    }

    render() {
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