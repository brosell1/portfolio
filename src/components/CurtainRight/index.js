import React, { Component } from "react";

import "./style.css";

import TitleTextRight from "../TitleTextRight";

class CurtainRight extends Component {
  render() {

    const openStyle = {
      width: "60vw"
    }

    return(
      <div className="curtainRight" style={this.props.curtains ? openStyle : {}} ><TitleTextRight /></div>
    )
  }
}

export default CurtainRight;
