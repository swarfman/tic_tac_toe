import React from "react";
import PropTypes from "prop-types";

export class Announcement extends React.Component {
	render() {
		return (
			<div className={this.props.winner ? "visible" : "hidden"}>
				<h3>Game Over</h3>
			</div>
		);
	}
}

Announcement.propTypes = {
	winner: PropTypes.func
};
