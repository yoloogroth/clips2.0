import React, { Component } from "react";
import ClipsDataService from "../services/clip.service";
import '../styles/tarjetas.css';
import '../styles/reproductor.css';
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

  setActiveClip = (clip) => {
    this.setState({
      currentClip: clip,
    });
  };

  playVideo = (event) => {
    event.target.play();
    setTimeout(() => {
      event.target.pause();
      event.target.currentTime = 0;
    }, 5000);
  };

  render() {
    const { clips, currentClip } = this.state;

    return (
      <><div className="contenedorDeMiniatura">
        {clips.map((clip) => (
          <div className="miniatura" key={clip.title}>
            <div
              className="card"
              onClick={() => {
                console.log("La tarjeta ha sido clickeada");
                this.setActiveClip(clip);
              }}
            >
              <div className="video-container">
                <video
                  className="card-img-top video"
                  src={clip.url}
                  muted
                  onMouseOver={(event) => event.target.play()}
                  controls={false}
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
            <h5 className="title">{clip.title}</h5>
          </div>
        ))}
      </div>
        <div className="reproductorVideo">
          {currentClip ? (
            <Clip
              clip={currentClip}
              refreshList={this.refreshList}
              key={currentClip.id} // agregar una clave única
            />
          ) : (
            <div>
              <br />
              <p>Please click on a Clip...</p>
            </div>
          )}
        </div></>
    );
  }
}
