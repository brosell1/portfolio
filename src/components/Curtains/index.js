import React, { Component } from "react";

import MediaQuery from "react-responsive";

import CurtainLeft from "../CurtainLeft";
import CurtainRight from "../CurtainRight";
import CurtainVert from "../CurtainVert";

class Curtains extends Component {
	render() {
		return (
			<div>
				<MediaQuery query="(min-device-width: 1224px)" >
					<CurtainLeft curtains={this.props.curtains} />
					<CurtainRight curtains={this.props.curtains} />
				</MediaQuery>
				<MediaQuery query="(max-device-width: 1224px)" >
					<CurtainVert curtains={this.props.curtains} />
				</MediaQuery>
			</div>
		);
	}
}

export default Curtains;
