import React, { Component } from "react";

import "./style.css";

class LinkButton extends Component {
	render() {
		return (
			<div>
				<button className="linkButton" href={this.props.link} />
			</div>
		);
	}
}

export default LinkButton;
