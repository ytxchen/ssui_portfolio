import React, { Component } from 'react';
import '../css/shared.css';
import '../css/landing.css';

import Landing from './Landing.js';
import ProjectListEntry from './ProjectListEntry.js';

import thumbnail_1 from './project_thumbnails/01.png';
import thumbnail_2 from './project_thumbnails/02.png';
import thumbnail_3 from './project_thumbnails/03.png';
import thumbnail_4 from './project_thumbnails/04.png';

class Works extends Component {
  constructor(props) {
    super(props);
    var projects = [
      {
        image: thumbnail_1,
        title: "Typeface Poster",
        link: "/projects/typeface-poster",
        description: "Poster design for the typeface Futura" 
      },

      {
        image: thumbnail_2,
        title: "Book Cover Design",
        link: "/projects/book-cover-design",
        description: "A series of cover design for dystopian science fiction" 
      },

      {
        image: thumbnail_3,
        title: "New York by Subway",
        link: "/projects/new-york-by-subway",
        description: "A subway-themed travel guide of New York City" 
      },

      {
        image: thumbnail_4,
        title: "Travel Photo Project",
        link: "/projects/travel-photo-project",
        description: "A series of photos from my trip to Europe" 
      },
    ];
    this.projects = projects;
  }

  renderProject(entry, idx) {
    var textLocation = idx%2 ? "right" : "left";
    var imageLocation = textLocation==="left" ? "right" : "left";
    return (
      <ProjectListEntry key={idx}
                        imageLocation={imageLocation}
                        textLocation={textLocation}
                        content={entry} />
    );
  }

  renderProjectList() {
    return (
      <div>
        {this.projects.map((entry, idx) => {
          return this.renderProject(entry, idx);
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Landing />
        {this.renderProjectList()}
      </div>
    );
  }
}

export default Works;