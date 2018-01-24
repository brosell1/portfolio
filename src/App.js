import React, { Component } from "react";
import "./App.css";

import Content from "./components/Content";
import CurtainLeft from "./components/CurtainLeft";
import CurtainRight from "./components/CurtainRight";
import LinkBar from "./components/LinkBar";
import Rope from "./components/Rope";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curtains: false,
			content: null,
		}
	}

	handleCurtainsChange = () => {
		this.setState(prevState => ({
			curtains: !prevState.curtains
		}))
	}

	render() {
		return (
			<div className="App">
				<CurtainLeft curtains={this.state.curtains} />
				<CurtainRight curtains={this.state.curtains} />
				<Rope handleCurtainsChange={this.handleCurtainsChange} curtains={this.state.curtains} />
				<Content />
				<LinkBar />
			</div>
		);
	}
}

export default App;
