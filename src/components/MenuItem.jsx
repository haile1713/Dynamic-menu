import React from "react";

const MenuItem = ({ name, img, price, desc }) => {
	return (
		<div className="menu-item">
			<div className="menu-item-image-wrapper">
				<img src={img} alt={name} className="menu-item-image" />
				<div className="menu-item-overlay">
					<p className="menu-item-description">{desc}</p>
				</div>
			</div>
			<div className="menu-item-details">
				<h3>{name}</h3>
				<p className="menu-item-price">{price}</p>
			</div>
		</div>
	);
};

export default MenuItem;
