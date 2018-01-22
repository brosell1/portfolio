import React, { Component } from "react";

class LinkButton extends Component {
	render() {
		return (
			<div>
				<button href={this.props.link} />
			</div>
		);
	}
}

export default LinkButton;
