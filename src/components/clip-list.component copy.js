import React, { Component } from "react";
import ClipsDataService from "../services/clip.service";
import '../styles/tarjetas.css';

import Clip from "./clip.component";

export default class ClipsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveClip = this.setActiveClip.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      clips: [],
      currentClip: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  setActiveClip = (clip, autoplay) => {
    this.setState({
      currentIndex: this.state.clips.indexOf(clip)
    });

    if (autoplay) {
      const video = document.getElementById("video-player");
      video.src = clip.url;
      video.play();
    }
  };

  playVideo(index) {
    const video = document.getElementById(`video-${index.url}`);
    if (video) {
      video.play();
      setTimeout(() => {
        video.pause();
        video.currentTime = 0;
        video.style.display = "none";
        video.nextSibling.style.display = "block";
      }, 5000);
    }
  }

  componentDidMount() {
    this.unsubscribe = ClipsDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let clips = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      clips.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
        url: data.url,
      });
    });

    this.setState({
      clips: clips,
    });
  }

  refreshList() {
    this.setState({
      currentClip: null,
      currentIndex: -1,
    });
  }

  setActiveClip(clip, index) {
    this.setState({
      currentClip: clip,
      currentIndex: index,
    });
  }

  render() {
    const { clips, currentClip, currentIndex } = this.state;

    return (
     <div className="list row">
        {clips &&
          clips.map((clip, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{clip.title}</h5>
                  <p className="card-text">{clip.description}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" onClick={() => this.setActiveClip(clip, index === currentIndex)}>Watch</button>
                </div>
              </div>
            </div>
          ))}
        <div className="col-md-6">
          {currentClip ? (
            <Clip
              clip={currentClip}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Clip...</p>
            </div>
          )}
        </div>
      </div>


      /* <div className="list row">
        <div className="col-md-6">
          <h4>Clips List</h4>

          <ul className="list-group">
            {clips &&
              clips.map((clip, index) => (
                <li
                  className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                  onClick={() => this.setActiveClip(clip, index)}
                  key={index}
                >
                  {clip.title}
                  <p>{clip.description}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentClip ? (
            <Clip
              clip={currentClip}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Clip...</p>
            </div>
          )}
        </div>
      </div> */

    );
  }
}