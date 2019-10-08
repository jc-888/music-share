import React, { Component } from 'react'

export default class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [],
       editting: false,
       id: "",
       song_name: "",
       artist: "",
       videoid: "",
       contributor: "",
       likes: 0,
       dislikes: 0
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.editting) {
       this.handleEditData();
       this.clearForm();
    } else {
       this.addData();
       this.clearForm();
    }
  };

  render() {
    return (
      <div className="form">
        <h3>Music Form</h3>
        <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              id="song_name"
              value={this.state.song_name}
              onChange={this.handleChange}
              placeholder="Song Name"
          />
          <input
              type="text"
              id="artist"
              value={this.state.artist}
              onChange={this.handleChange}
              placeholder="Artist"
          />
          <input
              type="text"
              id="videoid"
              value={this.state.videoid}
              onChange={this.handleChange}
              placeholder="Youtube URL"
          />
          <input
              type="text"
              id="contributor"
              value={this.state.contributor}
              onChange={this.handleChange}
              placeholder="Contributor"
          />
          <button type="submit" className="submit-button">
              <h5>Update Song</h5>
          </button>
        </form>
      </div>
    )
  }
}
