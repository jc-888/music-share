import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import YouTube from "react-youtube";

const opts = {
  playerVars: {
    autoplay: 0,
    rel: 0
  }
};

class SongList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //      data: []
  //   };
  // }

  _onReady = event => {
    event.target.pauseVideo();
  };

  MusicContainer = (music) => {
    return (
      <div className="music-container" key={music.id} id={music.id}>
        <h2>{music.song_name}</h2>
        <h3>{music.artist}</h3>

        <div className="rate">
          <div className="like">
              <p>Likes</p>
              <h3>{music.likes}</h3>
              <button
                id={music.id}
                // onClick={this.likeData}
                className="likebtn"
              >
                Like
              </button>
          </div>
          <div className="music-vid">
              <YouTube
                className="yt"
                videoId={music.videoid}
                // onReady={this._onReady}
                opts={opts}
              />
              <h5>Contributor: {music.contributor}</h5>
          </div>
          <div className="dislike">
              <p>Dislikes</p>
              <h3>{music.dislikes}</h3>
              <button
                id={music.id}
                // onClick={this.dislikeData}
                className="dislikebtn"
              >
                Dislike
              </button>
          </div>
        </div>

        <div className="small-rate">
          <div className="music-vid">
              <YouTube
                className="yt"
                videoId={music.videoid}
                // onReady={this._onReady}
                opts={opts}
              />
              <h5>Contributor: {music.contributor}</h5>
          </div>
          <div className="like-dislike">
              <div className="like">
                <p>Likes</p>
                <h3>{music.likes}</h3>
                <button
                    id={music.id}
                    // onClick={this.likeData}
                    className="likebtn"
                >
                    Like
                </button>
              </div>
              <div className="dislike">
                <p>Dislikes</p>
                <h3>{music.dislikes}</h3>
                <button
                    id={music.id}
                    // onClick={this.dislikeData}
                    className="dislikebtn"
                >
                    Dislike
                </button>
              </div>
          </div>
        </div>

        {/* <div className="delup">
          <button id={music.id} onClick={this.editData}>
              Edit
          </button>
          <button id={music.id} onClick={this.deleteSong}>
              Delete
          </button>
        </div> */}
        <hr />
    </div>
    )
  }


  render() {

    if (this.props.musicAllQuery && this.props.musicAllQuery.loading){
      return <div>Loading...</div>
    }

    if (this.props.musicAllQuery && this.props.musicAllQuery.error){
      return <div>Error</div>
    }

    const songs = this.props.musicAllQuery.getSongs
    return (
      <div>
        {songs.map(music => {
          return(
            <div>
              {this.MusicContainer(music)}
            </div>
          )
        })}
      </div>
    )
  }
}


const QUERY_ALL_MUSIC = gql`
  query MusicQuery {
    getSongs {
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

export default graphql(QUERY_ALL_MUSIC, {name: 'musicAllQuery'})(SongList);
