import React, { Component } from "react";

export default class Navbar extends Component {
	render() {
		const { setCategory } = this.props;
		return (
			<nav className="navbar">
				<h1 className="navbar-title">Our Menu</h1>
				<div className="navbar-buttons">
					{["Salads 🥗", "Brunch 🥖", "Drinks ☕️"].map((cat) => (
						<button key={cat} onClick={() => setCategory(cat)}>
							{cat}
						</button>
					))}
				</div>
			</nav>
		);
	}
}
