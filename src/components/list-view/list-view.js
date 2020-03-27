import React from "react";
import ShopItem from "../shop-item/";

const ListView = props => {
  const {items} = props;
  return (
    <div className="list-view">
      {items.map(product => {
        return (
          <ShopItem
            name={product.name}
            color={product.color}
            img={product.img}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ListView;
