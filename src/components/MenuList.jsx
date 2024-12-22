import React from "react";
import menuData from "../data/menuData";
import MenuItem from "./MenuItem";

const MenuList = ({ category }) => {
	const categories = ["Salads 🥗", "Brunch 🥖", "Drinks ☕️"]; //  categories definition

	return (
		<div>
			{categories.map((cat, index) => (
				<section
					key={index}
					id={`${cat.split(" ")[0].toLowerCase()}-section`}
				>
					<h2 className="section-heading">{cat}</h2>
					<div className="menu-list">
						{menuData
							.filter((item) => item.category === cat)
							.map((item, index) => (
								<MenuItem
									key={index}
									name={item.name}
									img={item.img}
									price={item.price}
									desc={item.desc}
								/>
							))}
					</div>
				</section>
			))}
		</div>
	);
};

export default MenuList;
