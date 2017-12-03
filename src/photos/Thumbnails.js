import React, { Component } from 'react';
import '../css/shared.css';
import '../css/photos.css';

class Thumbnails extends Component {

  /* image dynamic loading bug fixed via:
   * https://stackoverflow.com/questions/32612912/dynamically-add-images-react-webpack
   */
  srcString(tag, frame) {
    var src = './projects/' + tag + '/thumbs/' + tag + '-';
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
           key={tag+frame}
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
        <div className="thumbnail-project-label"> {name} </div>
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
    this.props.goToFrame(projectTag, frame);
    this.close();
  }

  constructClassNames() {
    var classNames = "drawer thumbnail-drawer";
    if (!this.props.isOpen) {
      classNames += " thumbnail-drawer-closed";
    }
    return classNames;
  }

  render() {
    return (
      <div className={this.constructClassNames()}>
        {this.renderProject('Unfolding Environments', 'ue', 16)}
        {this.renderProject('BW-ONE', 'bwi', 20)}
        {this.renderProject('BW-TWO', 'bwii', 15)}
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