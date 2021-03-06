import React from "react";
import PropTypes from "prop-types";

export class ResetButton extends React.Component {
	render() {
		return <button onClick={this.props.reset}>Reset</button>;
	}
}

ResetButton.propTypes = {
	reset: PropTypes.func
};
