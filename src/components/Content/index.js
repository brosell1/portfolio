import React, { Component } from "react";

import Paper from "material-ui/Paper";

import ben from "./ben.jpg";
import "./style.css";

class Content extends Component {
	render() {
		return (
			<div>
				<Paper className="content">
					<img src={ben} alt="it's ben" className="ben" />
					<h1>hire me</h1>
				</Paper>
			</div>
		);
	}
}

export default Content;
