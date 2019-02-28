import React from "react";
import { Announcement } from "./announcement.jsx";
import { ResetButton } from "./resetButton.jsx";
import { Tile } from "./Tile.jsx";
import PropTypes from "prop-types";

ResetButton.propTypes = {
	reset: PropTypes.func
};

Tile.propTypes = {
	loc: PropTypes.number
};

Announcement.propTypes = {
	winner: PropTypes.func
};
Tile.propTypes = {
	value: PropTypes.string
};
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: null
		};
	}

	resetBoard() {
		this.setState({
			gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
			turn: "x",
			winner: null
		});
	}

	updateBoard(loc, player) {
		if (
			this.state.gameBoard[loc] === "x" ||
			this.state.gameBoard[loc] === "o" ||
			this.state.winner
		) {
			//invalid move
			return;
		}

		let currentGameBoard = this.state.gameBoard;
		currentGameBoard.splice(loc, 1, this.state.turn);
		this.setState({ gameBoard: currentGameBoard });

		let topRow =
			this.state.gameBoard[0] +
			this.state.gameBoard[1] +
			this.state.gameBoard[2];
		if (topRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let middleRow =
			this.state.gameBoard[3] +
			this.state.gameBoard[4] +
			this.state.gameBoard[5];
		if (middleRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}
		let bottomRow =
			this.state.gameBoard[6] +
			this.state.gameBoard[7] +
			this.state.gameBoard[8];
		if (bottomRow.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let firstCol =
			this.state.gameBoard[0] +
			this.state.gameBoard[3] +
			this.state.gameBoard[6];
		if (firstCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let secondCol =
			this.state.gameBoard[1] +
			this.state.gameBoard[4] +
			this.state.gameBoard[7];
		if (secondCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let thirdCol =
			this.state.gameBoard[2] +
			this.state.gameBoard[5] +
			this.state.gameBoard[8];
		if (thirdCol.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let firstDiag =
			this.state.gameBoard[0] +
			this.state.gameBoard[4] +
			this.state.gameBoard[8];
		if (firstDiag.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let secondDiag =
			this.state.gameBoard[2] +
			this.state.gameBoard[4] +
			this.state.gameBoard[6];
		if (secondDiag.match(/xxx|ooo/)) {
			this.setState({ winner: this.state.turn });
			return;
		}

		let moves = this.state.gameBoard.join("").replace(/ /g, "");
		if (moves.length === 9) {
			this.setState({ winner: "d" });
		}

		this.setState({ turn: this.state.turn === "x" ? "o" : "x" });
	}

	render() {
		return (
			<div className="container">
				<div className="menu">
					<div className="title">
						<h1 className="pink">Tic Tac Toe</h1>
					</div>
					<Announcement winner={this.state.winner} />
					<ResetButton reset={this.resetBoard.bind(this)} />
				</div>
				{this.state.gameBoard.map(
					function(value, i) {
						return (
							<Tile
								key={i}
								loc={i}
								value={value}
								updateBoard={this.updateBoard.bind(this)}
								turn={this.state.turn}
							/>
						);
					}.bind(this)
				)}
			</div>
		);
	}
}
