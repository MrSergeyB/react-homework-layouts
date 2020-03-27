import React from "react";
import "./cards-view.css";
import ShopCard from "../shop-card";

const CardsView = props => {
  const {cards} = props;
  return (
    <div className="row">
      <div class="col s12 m12">
        <div className="card-view">
          {cards.map(product => {
            return (
              <ShopCard
                name={product.name}
                color={product.color}
                img={product.img}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsView;
