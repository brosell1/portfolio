import React, { Component } from 'react';

import lil_ben from "./lil_ben.png";
import "./style.css";

class LilBen extends Component {
  render() {
    return(
      <img alt="It's Li'l Ben!" className="lilBen" src={lil_ben} />
    )
  }
}

export default LilBen
