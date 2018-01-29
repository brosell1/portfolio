import React, { Component } from "react";

import "./style.css"

import rope from "./rope.png"

class Rope extends Component {
  render() {
    return(
      <div>
        <input
          type="checkbox"
          id="rope"
          value={this.props.curtains}
          onChange={this.props.handleCurtainsChange}
        />
        <label htmlFor="rope" >
          <img
            src={rope}
            alt="Click to open!"
            className="rope"
          />
        </label>
      </div>
    )
  }
}

export default Rope;
