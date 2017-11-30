import React, { Component } from 'react';
import '../../css/shared.css';
import '../../css/projects.css';

import OverviewImage from './images/overview.png';
import SketchSingle from './images/sketch-single.png';

class TypefacePoster extends Component {

  renderTitle() {
    return (
      <div className="project-title">
        Typeface Poster
      </div>
    )
  }

  renderOverview() {
    return (
      <div className="project-overview">
        <div className="project-logistics col-5">
        Spring 2017 <br/>
        Communication Design Fundamentals <br/>
        3 Weeks
        </div>

        <div className="project-desc col-7">
        For my final version, I tweaked the spacing between designer name, time, and description. The intention was to use the space between each of these to reflect the proximity of information. Thus time is kept close to designer name, so there is a clear gap between them, but viewer can still relate them as one element. Also the description paragraph is aligned with the A in lower left corner. The tipped over A has the form of an arrow head pointing to the right, so its form invites viewers to read the description.
        </div>

        <img className="project-overview-image col-12"
             src={OverviewImage}
             alt="typeface poster project overview image"/>
      </div>
    )
  }

  renderBody() {
    return (
      <div className="project-body">
        <div className="project-body-section">
          <img className="project-image float-right col-4"
               src={SketchSingle}
               alt="hand sketch of typeface poster" />

          <div className="project-body-heading float-left col-7">
            Sketches
          </div>

          <div className="project-body-text float-left col-7">
          I thought about the importance of each component of the poster, and how can I allocate space regarding their priority. The core and beauty of a typeface should be its character set, thus I thought about how I can allocate more space on the poster to the character set while maintaining nice balance and structure.   
          </div>          
        </div>

      </div>
    )
  }

  render() {
    return (
      <div className="project-content web-max-width">
        
        {this.renderTitle()}
        {this.renderOverview()}

        {this.renderBody()}

      </div>
    )
  }
}
export default TypefacePoster;