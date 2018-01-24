import React, { Component } from "react";

import CurtainLeft from "../CurtainLeft";
import CurtainRight from "../CurtainRight";

class Curtains extends Component {
	render() {
		return (
			<div>
				<CurtainLeft curtains={this.props.curtains} />
				<CurtainRight curtains={this.props.curtains} />
			</div>
		);
	}
}

export default Curtains;
