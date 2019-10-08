// import React, { Component } from 'react'

// export default class SongList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        data: [],
//        editting: false,
//        id: "",
//        song_name: "",
//        artist: "",
//        videoid: "",
//        contributor: "",
//        likes: 0,
//        dislikes: 0
//     };
//   }


//   render() {
//     return (
//       <div className="music-container" key={music.id} id={music.id}>
//         <h2>{music.song_name}</h2>
//         <h3>{music.artist}</h3>

//         <div className="rate">
//           <div className="like">
//               <p>Likes</p>
//               <h3>{music.likes}</h3>
//               <button
//                 id={music.id}
//                 onClick={this.likeData}
//                 className="likebtn"
//               >
//                 Like
//               </button>
//           </div>
//           <div className="music-vid">
//               <YouTube
//                 className="yt"
//                 videoId={music.videoid}
//                 onReady={this._onReady}
//                 opts={opts}
//               />
//               <h5>Contributor: {music.contributor}</h5>
//           </div>
//           <div className="dislike">
//               <p>Dislikes</p>
//               <h3>{music.dislikes}</h3>
//               <button
//                 id={music.id}
//                 onClick={this.dislikeData}
//                 className="dislikebtn"
//               >
//                 Dislike
//               </button>
//           </div>
//         </div>

//         <div className="small-rate">
//           <div className="music-vid">
//               <YouTube
//                 className="yt"
//                 videoId={music.videoid}
//                 onReady={this._onReady}
//                 opts={opts}
//               />
//               <h5>Contributor: {music.contributor}</h5>
//           </div>
//           <div className="like-dislike">
//               <div className="like">
//                 <p>Likes</p>
//                 <h3>{music.likes}</h3>
//                 <button
//                     id={music.id}
//                     onClick={this.likeData}
//                     className="likebtn"
//                 >
//                     Like
//                 </button>
//               </div>
//               <div className="dislike">
//                 <p>Dislikes</p>
//                 <h3>{music.dislikes}</h3>
//                 <button
//                     id={music.id}
//                     onClick={this.dislikeData}
//                     className="dislikebtn"
//                 >
//                     Dislike
//                 </button>
//               </div>
//           </div>
//         </div>

//         <div className="delup">
//           <button id={music.id} onClick={this.editData}>
//               Edit
//           </button>
//           <button id={music.id} onClick={this.deleteSong}>
//               Delete
//           </button>
//         </div>
//         <hr />
//     </div>
//     )
//   }
// }
