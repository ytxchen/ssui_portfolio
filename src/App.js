import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/shared.css';

import NavBar from './NavBar.js';
import Works from './works/Works.js';
import Play from './play/Play.js';
import Photos from './photos/Photos.js';
import Resume from './resume/Resume.js';
import Footer from './Footer.js';

// projects
import PlaceHolder from './projects/PlaceHolder.js';
import TypefacePoster from './projects/typefacePoster/TypefacePoster.js';

class App extends Component {
  renderWorks() {
    return (
      <div className="portfolio">
        <NavBar mode="works"/>
        <Works />
        <Footer />
      </div>
    );
  }

  renderPlay() {
    return (
      <div className="portfolio">
        <NavBar mode="play"/>
        <Play />
      </div>
    );
  }

  renderPhotos() {
    return (
      <div className="portfolio">
        <NavBar mode="photos"/>
        <Photos />
      </div>
    );
  }

  renderResume() {
    return (
      <div className="portfolio">
        <NavBar mode="resume"/>
        <Resume />
      </div>
    );
  }

  renderProject(props) {
    const matchProject = (projectName) => {
      if (projectName==="typeface-poster") {
        return <TypefacePoster />;
      }
      else {
        return <PlaceHolder />;
      }
    };
    return (
      <div className="portfolio">
        <NavBar mode="works"/>
        {matchProject(props.match.params.projectName)}
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* routing for play section, reserved for future use
          <Route path="/play" component={this.renderPlay} /> */}
          <Route path="/photos" component={this.renderPhotos} />
          <Route path="/resume" component={this.renderResume} />
          <Route path="/projects/:projectName" component={this.renderProject} />
          <Route component={this.renderWorks} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
