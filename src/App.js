import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './css/shared.css';

import NavBar from './NavBar.js';
import Works from './works/Works.js';
import Photos from './photos/Photos.js';

class App extends Component {
  renderWorks() {
    return (
      <div className="portfolio">
        <NavBar mode="works"/>
        <Works />
      </div>
    );
  }

  renderPlay() {
    return (
      <div className="portfolio">
        <NavBar mode="play"/>
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
      </div>
    );
  }

  renderProject() {
    return (
      <div className="portfolio">
        <NavBar mode="works"/>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/play" component={this.renderPlay} />
          <Route path="/photos" component={this.renderPhotos} />
          <Route path="/resume" component={this.renderResume} />
          <Route component={this.renderWorks} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
