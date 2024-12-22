import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			category: "Salads",
		};
	}

	setCategory = (category) => {
		this.setState({ category });
	};

	render() {
		return (
			<div className="app">
				<Navbar setCategory={this.setCategory} />
				<MenuList category={this.state.category} />
			</div>
		);
	}
}
