import React from "react";
import "./shop-card.css";
import PropTypes from "prop-types";

const ShopCard = props => {
  const {img, color, price, name} = props;
  return (
    <div className="card card-size">
      <div className="card-content">
        <span className="card-title title">{name}</span>
        <p>{color}</p>
        <div className="card-image">
          <img src={img} alt={name} style={{width: 150}} />
        </div>
        <div className="card-action">
          <p>${price}</p>
          <button className="button" href="#">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  img: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};

export default ShopCard;
