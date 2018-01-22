import React, { Component } from "react";
import "./App.css";

import TitleText from "./components/TitleText";
import LinkBar from "./components/LinkBar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TitleText />
				<LinkBar />
			</div>
		);
	}
}

export default App;
