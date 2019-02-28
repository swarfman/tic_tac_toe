import React from "react";

export class TopLeft extends React.Component {
	render() {
		return (
			<div className="col-4 bg-warning border border-dark" id="topLeft" />
		);
	}
}

document.addEventListener("click", function() {
	document.getElementById("topLeft").innerHTML = "X";
});
