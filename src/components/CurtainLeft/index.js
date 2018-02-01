import React, { Component } from "react";

import "./style.css";

import TitleTextLeft from "../TitleTextLeft";

class CurtainLeft extends Component {
  render() {

    const openStyle = {
      left: "-90vw",
    }

    return(
      <div className="curtainLeft" style={this.props.curtains ? openStyle : {}} ><TitleTextLeft /></div>
    )
  }
}

export default CurtainLeft;
