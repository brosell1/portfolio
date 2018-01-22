import React, { Component } from "react";

import "./style.css";

import LinkButton from "../LinkButton";

class LinkBar extends Component {
	render() {
		return (
			<div className="linkBar">
				<LinkButton link="" />
				<LinkButton link="" />
				<LinkButton link="" />
				<LinkButton link="" />
				<LinkButton link="" />
			</div>
		);
	}
}

export default LinkBar;
