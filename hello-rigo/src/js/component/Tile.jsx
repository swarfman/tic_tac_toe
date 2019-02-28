import React from "react";
import PropTypes from "prop-types";

export class Tile extends React.Component {
	tileClick(props) {
		props.updateBoard(props.loc, props.turn);
	}

	render() {
		return (
			<div
				className={"tile " + this.props.loc}
				onClick={() => this.tileClick(this.props)}>
				<p>{this.props.value}</p>
			</div>
		);
	}
}
Tile.propTypes = {
	value: PropTypes.string,
	loc: PropTypes.number
};
