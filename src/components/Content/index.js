import React, { Component } from "react";

import ben from "./ben.jpg";
import "./style.css";

class Content extends Component {
  render() {
    return(
      <div className="content" >
        <img
          src={ben}
          alt="it's ben"
          className="ben"
        />
        <h1>hire me</h1>
      </div>)
  }
}

export default Content;
