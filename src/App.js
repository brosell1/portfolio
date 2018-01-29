import React, { Component } from "react";
import "./App.css";

import Content from "./components/Content";
import Curtains from "./components/Curtains";
import LinkBar from "./components/LinkBar";
import Rope from "./components/Rope";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curtains: false,
			content: null
		};
	}

	handleCurtainsChange = () => {
		this.setState(prevState => ({
			curtains: !prevState.curtains
		}));
	};

	render() {
		return (
			<div className="App">
				<Curtains curtains={this.state.curtains} />
				<Rope
					handleCurtainsChange={this.handleCurtainsChange}
					curtains={this.state.curtains}
				/>
				<Content />
				{/*<LinkBar />*/}
			</div>
		);
	}
}

export default App;
