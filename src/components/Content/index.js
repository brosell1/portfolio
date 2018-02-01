import React, { Component } from "react";

import "./style.css";

import Bio from "../Bio";
import Carousel from "../Carousel";
import ContactDetails from "../ContactDetails";
import ContactLinks from "../ContactLinks";

class Content extends Component {
	render() {
		return (
  		<div className="content">
        <Bio />
        <Carousel/>
        <ContactDetails/>
        <ContactLinks/>
      </div>
		);
	}
}

export default Content;
