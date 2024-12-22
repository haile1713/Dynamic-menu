import React from "react";

const MenuItem = ({ name, img, price }) => {
  return (
    <div className="menu-item">
      <img src={img} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3>{name}</h3>
        <p className="menu-item-price">{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
