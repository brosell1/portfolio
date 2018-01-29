import React, { Component } from "react";

import "./style.css";

import TitleTextVert from "../TitleTextVert";

class CurtainVert extends Component {
  render() {

    const openStyle = {
      top: "-85%",
    }

    return(
      <div className="curtainVert" style={this.props.curtains ? openStyle : {}} ><TitleTextVert /></div>
    )
  }
}

export default CurtainVert;
