import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const getVideoId = require('get-video-id')

class SongForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      song_name,
      artist,
      videoid,
      contributor,
      likes,
      dislikes
    } = this.state;
    
    const vidId = getVideoId(videoid).id

    await this.props.createSongMutation({
      variables: {
        song_name,
        artist,
        videoid: vidId,
        contributor,
        likes,
        dislikes
      }
    })
  };

  render() {
    return (
      <div className="form">
        <h3>Contribute Music</h3>
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
              <h5>Add</h5>
          </button>
        </form>
      </div>
    )
  }
}

const MUSIC_MUTATION = gql`
  mutation MusicMutation(
    $song_name: String!,
    $artist: String!,
    $videoid: String!,
    $contributor: String!,
    $likes: Int!,
    $dislikes: Int!
  ) {
    createSong(
      song_name: $song_name,
      artist: $artist,
      videoid: $videoid,
      contributor: $contributor,
      likes: $likes,
      dislikes: $dislikes
    ) {
      id
      song_name
      artist
      videoid
      contributor
      likes
      dislikes
    }
  }
`

export default graphql(MUSIC_MUTATION, {name: 'createSongMutation'})(SongForm);