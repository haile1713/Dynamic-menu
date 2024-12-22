import React from "react";
import menuData from "../data/menuData";
import MenuItem from "./MenuItem";

const MenuList = ({ category }) => {
  const categories = ["Salads 🥗", "Brunch 🥖", "Drinks ☕️"]; // Define all categories here

  return (
    <div>
      {categories.map((cat, index) => (
        <section key={index} id={`${cat.split(" ")[0].toLowerCase()}-section`}>
          <h2 className="section-heading">{cat}</h2>
          <div className="menu-list">
            {/* Filter menuData for the current category */}
            {menuData
              .filter((item) => item.category === cat)
              .map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default MenuList;
