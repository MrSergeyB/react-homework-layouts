import React from "react";
import "./shop-item.css";
import PropTypes from "prop-types";

const ShopItem = props => {
  const {img, color, price, name} = props;
  return (
    <div className="shop-item">
      <div className="img-div">
        <img src={img} alt={name} />
      </div>
      <div>
        {" "}
        <span className="shop-item-title">{name}</span>
      </div>
      <div>{color}</div>
      <div>
        {" "}
        <p className="shop-item-price">${price}</p>
      </div>
      <div>
        <button className="button">Add to cart</button>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  img: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

export default ShopItem;
