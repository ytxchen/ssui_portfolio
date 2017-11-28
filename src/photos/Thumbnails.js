import React, { Component } from 'react';
import '../css/shared.css';
import '../css/photos.css';

class Thumbnails extends Component {

  /* image dynamic loading bug fixed via:
   * https://stackoverflow.com/questions/32612912/dynamically-add-images-react-webpack
   */
  srcString(tag, frame) {
    var src = "";
    src += './projects/' + tag + '/thumbs/' + tag + '-';
    src += frame < 10 ? ('0' + frame.toString()) : (frame.toString());
    src += '_thumb.jpg';
    return src;
  }

  renderThumbnail(tag, frame) {
    var src = this.srcString(tag, frame);
    return (
      <img className="thumbnail" 
           src={require(`${src}`)} 
           alt={src}
           onClick={() => this.navigateToPhoto(tag, frame)}/>
    );
  }

  renderProject(name, tag, frames) {
    var indices = []
    for (var i = 0; i < frames; i++) {
      indices.push(i+1);
    } 
    return (
      <div className="photo-project-overview">
        <h4> {name} </h4>
        {indices.map((i) => {
          return this.renderThumbnail(tag, i);
        })}
      </div>
    )
  }

  close() {
    this.props.close();
  }

  navigateToPhoto(projectTag, frame) {

  }

  render() {
    return (
      <div className="drawer thumbnail-drawer">
        <div className="thumbnail-drawer-button close-thumbnail-drawer-button"
             onClick={this.close.bind(this)} />      

        {this.renderProject('Unfolding Environment', 'ue', 16)}
        {this.renderProject('BW-TWO', 'bwii', 15)}
        {this.renderProject('BW-ONE', 'bwi', 20)}
        {this.renderProject('New York Stories', 'nys', 22)}
        {this.renderProject('Portraits', 'portrait', 16)}
        {this.renderProject('2016', 'mmxvi', 15)}
        {this.renderProject('2015', 'mmxv', 13)}
        {this.renderProject('2014', 'mmxiv', 18)}

      </div>
    )
  }
}
export default Thumbnails;