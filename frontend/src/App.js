import React, { Component } from "react";
import SongForm from "./components/SongForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Music Share</h1>
        <p>
            Just like <strong>FaceBook </strong>
            but without all the <strong>Depression</strong>
        </p>
        <SongForm/>
      </div>
    );
  }
}

export default App;
