import React, { Component } from "react";
import ClipsDataService from "../services/clip.service";
import '../styles/clip.css'
import ReactionsComponent from "./reacciones.component";
import CommentsComponent from "./comentarios.component";

export default class Clip extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateClip = this.updateClip.bind(this);
    this.deleteClip = this.deleteClip.bind(this);

    this.state = {
      currentClip: {
        id: props.clip.id,
        title: props.clip.title,
        description: props.clip.description,
        published: props.clip.published,
        url: props.clip.url,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { clip } = nextProps;
    if (prevState.currentClip.id !== clip.id) {
      return {
        currentClip: clip,
        message: ""
      };
    }

    return prevState.currentClip;
  }

  componentDidMount() {
    this.setState({
      currentClip: this.props.clip,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentClip: {
          ...prevState.currentClip,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentClip: {
        ...prevState.currentClip,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    ClipsDataService.update(this.state.currentClip.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentClip: {
            ...prevState.currentClip,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateClip() {
    const data = {
      title: this.state.currentClip.title,
      description: this.state.currentClip.description,
      url: this.state.currentClip.url,
    };

    ClipsDataService.update(this.state.currentClip.id, data)
      .then(() => {
        this.setState({
          message: "The Clip was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteClip() {
    ClipsDataService.delete(this.state.currentClip.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentClip } = this.state;

    return (
      <div className="clip-container">
        <div class="clip">
          {currentClip ? (
            <div className="edit-form">
              <form>
                <div class="video-container">
                  <video controls>
                    <source src={currentClip.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h4>{currentClip.title}</h4>
                < ReactionsComponent />
                < CommentsComponent />
              </form>
            </div>

          ) : (
            <div>
              <br />
              <p>Please click on a Clip...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}